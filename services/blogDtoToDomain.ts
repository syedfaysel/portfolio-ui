import { BlogPostDto, BlogPostDomain } from "@/lib/types";

export const blogDtoToDomain = (blog: BlogPostDto): BlogPostDomain => {
    return {
        id: blog.id,
        title: blog.title,
        content: blog.content,
        date: blog.createdAt,
        image: blog.image,
        excerpt: blog.content.slice(0, 3),
        tags: blog?.tags || [],
    }
}