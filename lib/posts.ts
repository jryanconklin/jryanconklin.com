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

/**
 * Get all posts sorted by date (newest first)
 */
export function getAllPosts(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML
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
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))
}
