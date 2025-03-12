import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlugs(slug) {
    const fullPath = path.join(postsDirectory, `${slug}`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents);

    return { data, content }
}

export async function getAllPosts() {
    const slugs = getPostSlugs()

    const posts = slugs.map((slug) => {
        const { data } = getPostBySlugs(slug)
        return {
            slug: slug.replace(/\.mdx$/,''),
            frontMatter: data,
        }
    })
    return posts;
}