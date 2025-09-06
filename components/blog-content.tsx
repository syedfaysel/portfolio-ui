"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Customize heading styles
          h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-6" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mb-5" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mb-4" {...props} />,
          h4: ({ node, ...props }) => <h4 className="text-xl font-bold mb-3" {...props} />,
          // Customize paragraph styles
          p: ({ node, ...props }) => <p className="mb-4 leading-7" {...props} />,
          // Customize list styles
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          // Customize link styles
          a: ({ node, ...props }) => (
            <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          // Customize blockquote styles
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
          ),
          // Customize code block styles
          code: ({ node, className, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            return (
              <code
                className={`${
                  className?.includes("language-") 
                    ? "block bg-muted p-4 rounded-lg text-sm overflow-x-auto"
                    : "bg-muted px-1.5 py-0.5 rounded text-sm"
                }`}
                {...props}
              />
            )
          },
          // Customize image styles
          img: ({ node, ...props }) => (
            <img className="rounded-lg my-4 max-w-full h-auto" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 