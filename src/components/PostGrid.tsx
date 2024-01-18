import React from "react";
import SectionHeader from "./SectionHeader";
import CardComponent from "./CardComponent";
import { BlogCard } from "@/lib/interface";

interface PostsGridProps {
  posts: BlogCard[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <div className="mt-6 border-b dark:border-primary py-10">
      <SectionHeader title="all posts" subtitle="all" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-5">
        {posts.length > 0 &&
          posts.map((post) => (
            <CardComponent key={post.currentSlug} post={post} />
          ))}
      </div>
    </div>
  );
};

export default PostsGrid;
