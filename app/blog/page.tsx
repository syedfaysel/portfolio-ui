import BlogCard from "@/components/blog-card"
import { blogApi } from "@/lib/api-client"
import { blogDtoToDomain } from "@/services/blogDtoToDomain";

export default async function BlogPage() {

  const res = await blogApi.getBlogs();
  const blogPosts = res.data?.map(blogDtoToDomain) || [];
  // console.log(blogs)

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Blog</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Thoughts, tutorials, and insights about web development, design, and technology.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
