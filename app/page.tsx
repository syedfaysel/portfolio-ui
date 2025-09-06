// "use client"

// import { motion } from "framer-motion"
// import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import LatestBlogs from "@/components/latest-blogs"
import FeaturedProjects from "@/components/featured-projects"
import HeroSection from "@/components/hero-section"
import { portfolioApi, blogApi } from "@/lib/api-client"

export default async function Home() {
  try {
    // Fetch data on the server
    const [projectsResponse, blogsResponse] = await Promise.all([
      portfolioApi.getProjects(),
      blogApi.getBlogs()
    ])

    // Get featured projects (first 3 projects)
    const featuredProjects = projectsResponse?.data?.slice(0, 3) || []
    // Get latest blogs (first 3 blogs)
    const latestBlogs = blogsResponse?.data ? [...blogsResponse.data].reverse().slice(0, 3) : []

    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />
        {/* Featured Projects Section */}
        <FeaturedProjects projects={featuredProjects} />
        {/* Latest Blog Posts Section */}
        <LatestBlogs blogs={latestBlogs} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    // Return a fallback UI later
    return (
      <div className="flex flex-col">
        <HeroSection />
        <FeaturedProjects projects={[]} />
        <LatestBlogs blogs={[]} />
      </div>
    )
  }
}
