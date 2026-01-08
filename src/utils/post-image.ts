import type { CollectionEntry } from 'astro:content'
import { getImage } from 'astro:assets'

const imagesGlob = import.meta.glob<{ default: ImageMetadata }>('/src/content/posts/_images/**/*.{jpeg,jpg,png,gif,webp}')

export async function getPostImage(post: CollectionEntry<'posts'>): Promise<string | undefined> {
  // 1. Check frontmatter cover
  if (post.data.cover) {
    return post.data.cover // Assuming this is an external URL or handled otherwise. 
    // If it's a local path, we might need similar logic, but let's assume external or simple path for now if user manually sets it.
    // Ideally user sets a path relative to the post or project root. 
    // For now I'll focus on the extraction part as requested.
  }

  // 2. Extract from content
  if (!post.body) return undefined

  const imageRegex = /!\[.*?\]\((.*?)\)/
  const match = post.body.match(imageRegex)

  if (!match || !match[1]) return undefined

  const imagePath = match[1]

  // Resolve path to be absolute or matching glob keys
  // Post markdown is in src/content/posts/
  // Image path in markdown example: ../posts/_images/aboutme.jpg
  // We need to resolve this to /src/content/posts/_images/aboutme.jpg
  
  // Clean the path
  // If it starts with ../posts/, replace with /src/content/posts/
  let resolvedPath = imagePath
  if (imagePath.startsWith('../posts/')) {
    resolvedPath = '/src/content/posts/' + imagePath.replace('../posts/', '')
  } else if (imagePath.startsWith('./')) {
     resolvedPath = '/src/content/posts/' + imagePath.replace('./', '')
  } else if (!imagePath.startsWith('/')) {
     // Assume relative to posts dir if no other prefix
     resolvedPath = '/src/content/posts/' + imagePath
  }

  // Find in glob
  const imageImporter = imagesGlob[resolvedPath]
  
  if (!imageImporter) {
    console.warn(`[getPostImage] Image not found in glob: ${resolvedPath} (derived from ${imagePath})`)
    return undefined
  }

  const imageModule = await imageImporter()
  const imageMetadata = imageModule.default

  const optimizedImage = await getImage({
    src: imageMetadata,
    format: 'png',
    // width: 1200, // Optional: resize for OG
    // height: 630,
  })

  return optimizedImage.src
}
