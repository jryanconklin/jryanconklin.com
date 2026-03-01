import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const postsDirectory = path.join(process.cwd(), "posts")

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export interface PostMetadata {
  slug: string
  title: string
  date: string
  description: string
}

function findMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []

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

/**
 * Get all posts sorted by date (newest first)
 */
export function getAllPosts(): PostMetadata[] {
  const filePaths = findMarkdownFiles(postsDirectory)

  const allPostsData = filePaths.map((filePath) => {
    const slug = path.basename(filePath, ".md")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post {
  const filePaths = findMarkdownFiles(postsDirectory)
  const filePath = filePaths.find((p) => path.basename(p, ".md") === slug)

  if (!filePath) {
    throw new Error(`Post not found: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const htmlContent = marked(content)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content: htmlContent as string,
  }
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  const filePaths = findMarkdownFiles(postsDirectory)
  return filePaths.map((filePath) => path.basename(filePath, ".md"))
}
