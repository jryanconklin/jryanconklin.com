#!/usr/bin/env node
/**
 * Publish a blog post to BlueSky.
 *
 * Usage:
 *   node scripts/publish-to-bluesky.mjs
 *   node scripts/publish-to-bluesky.mjs --slug=my-post
 *   node scripts/publish-to-bluesky.mjs --dry-run
 *
 * Env vars required:
 *   BLUESKY_HANDLE       your handle, e.g. jryanconklin.com
 *   BLUESKY_APP_PASSWORD an app password from bsky.app/settings/app-passwords
 */

import { AtpAgent, RichText } from "@atproto/api"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const PUBLISHED_FILE = new URL("./.published.json", import.meta.url).pathname
const POSTS_DIR = new URL("../posts", import.meta.url).pathname
const BASE_URL = "https://jryanconklin.com"
const MAX_GRAPHEMES = 300

// Parse CLI args
const args = process.argv.slice(2)
const slugArg = args.find((a) => a.startsWith("--slug="))
const targetSlug = slugArg ? slugArg.split("=")[1] : null
const dryRun = args.includes("--dry-run")

// Grapheme counting (Node 24 supports Intl.Segmenter natively)
const segmenter = new Intl.Segmenter()
const graphemeLen = (s) => [...segmenter.segment(s)].length

function findMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath)
    }
  }
  return files
}

function loadPublished() {
  if (!fs.existsSync(PUBLISHED_FILE)) return []
  return JSON.parse(fs.readFileSync(PUBLISHED_FILE, "utf8"))
}

function savePublished(slugs) {
  fs.writeFileSync(PUBLISHED_FILE, JSON.stringify(slugs, null, 2) + "\n")
}

function getPost(slug) {
  const files = findMarkdownFiles(POSTS_DIR)
  const file = files.find((f) => path.basename(f, ".md") === slug)
  if (!file) {
    console.error(`Error: no post found with slug "${slug}"`)
    process.exit(1)
  }
  const { data } = matter(fs.readFileSync(file, "utf8"))
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
  }
}

function getNewestPost() {
  const files = findMarkdownFiles(POSTS_DIR)
  const posts = files.map((f) => {
    const { data } = matter(fs.readFileSync(f, "utf8"))
    return { slug: path.basename(f, ".md"), date: data.date }
  })
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  if (!posts.length) {
    console.error("Error: no posts found")
    process.exit(1)
  }
  return posts[0].slug
}

function buildText(description, url) {
  const suffix = `\n\n${url}`
  const suffixLen = graphemeLen(suffix)
  const maxDescLen = MAX_GRAPHEMES - suffixLen
  let desc = description
  if (graphemeLen(desc) > maxDescLen) {
    const segs = [...segmenter.segment(desc)]
    desc =
      segs
        .slice(0, maxDescLen - 1)
        .map((s) => s.segment)
        .join("") + "…"
  }
  return `${desc}${suffix}`
}

async function main() {
  const handle = process.env.BLUESKY_HANDLE
  const password = process.env.BLUESKY_APP_PASSWORD

  if (!handle || !password) {
    console.error("Error: BLUESKY_HANDLE and BLUESKY_APP_PASSWORD must be set")
    process.exit(1)
  }

  const slug = targetSlug ?? getNewestPost()
  const post = getPost(slug)
  const url = `${BASE_URL}/thoughts/${slug}`

  // Duplicate check
  const published = loadPublished()
  if (published.includes(slug)) {
    console.error(`Error: "${slug}" has already been published to BlueSky.`)
    console.error("To re-publish, remove it from scripts/.published.json")
    process.exit(1)
  }

  const text = buildText(post.description, url)

  if (dryRun) {
    console.log("--- DRY RUN ---")
    console.log("Post text:")
    console.log(text)
    console.log(`\nGraphemes: ${graphemeLen(text)} / ${MAX_GRAPHEMES}`)
    console.log("\nLink card:")
    console.log(`  uri:   ${url}`)
    console.log(`  title: ${post.title}`)
    console.log(`  desc:  ${post.description}`)
    return
  }

  const agent = new AtpAgent({ service: "https://bsky.social" })
  await agent.login({ identifier: handle, password })

  const rt = new RichText({ text })
  await rt.detectFacets(agent)

  await agent.post({
    text: rt.text,
    facets: rt.facets,
    embed: {
      $type: "app.bsky.embed.external",
      external: {
        uri: url,
        title: post.title,
        description: post.description,
      },
    },
    createdAt: new Date().toISOString(),
  })

  published.push(slug)
  savePublished(published)

  console.log(`Posted: ${post.title}`)
  console.log(`View at: https://bsky.app/profile/${handle}`)
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
