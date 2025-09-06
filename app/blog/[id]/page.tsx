import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { blogApi } from "@/lib/api-client"
import { blogDtoToDomain } from "@/services/blogDtoToDomain"
import { formatTime } from "@/lib/helper/format-time"
import BlogContent from "@/components/blog-content"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{id: string}>
  }) {
  
  const {id} = await params;
  const res = await blogApi.getBlogById(id)
  const post = blogDtoToDomain(res.data);

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>

        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatTime(post.date)}</time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <BlogContent content={post.content} />
        </div>
      </article>
    </div>
  )
}
