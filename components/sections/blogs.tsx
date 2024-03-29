"use client";
import React from 'react'
import BlogCard from "@components/blog-card";
import SectionHeading from "@components/section-heading";

export default function Blogs({ posts }: any) {
  // console.log(posts);

  return (
    <section className="container site-section" id="blog">
      <SectionHeading heading="Blog" subheading="posts" />
      <div className="relative grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {posts.slice(0, 6).map((post: any) => (
          <BlogCard post={post.node} key={post.cuid} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://sudhagar.hashnode.dev"
          rel="noopener noreferrer"
          target="_blank"
          className="button primary"
        >
          View More
        </a>
      </div>
    </section>
  );
}

