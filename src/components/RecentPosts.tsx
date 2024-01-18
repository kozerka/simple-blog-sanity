import React from "react";
import SectionHeader from "./SectionHeader";
import SmallCard from "./SmallCard";
import { client } from "@/lib/sanity";
import { BlogCard } from "@/lib/interface";

async function getRecentPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc)[0...4] {
      title, 'currentSlug':slug.current, titleImage, author
    }`;
  const data = await client.fetch(query);
  return data;
}

const RecentPosts = async () => {
  const recentPosts: BlogCard[] = await getRecentPosts();
  return (
    <div className="mt-6 border-b dark:border-primary py-10">
      <SectionHeader title="Recent posts" subtitle="last 4 posts" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recentPosts.map((post) => (
          <SmallCard key={post.currentSlug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
