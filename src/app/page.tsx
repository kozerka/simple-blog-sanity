import { BlogCard } from '@/lib/interface';
import { client } from '@/lib/sanity';
import CardComponent from '@/components/CardComponent';
import Header from '@/components/Header';
import Tags from '@/components/Tags';
import RecentPosts from "@/components/RecentPosts";
import PostsGrid from "@/components/PostGrid";

export const revalidate = 3600;
async function getData() {
	const query = `*[_type == 'post'] | order(_createdAt desc) {
  title, description, 'currentSlug':slug.current, titleImage, tags[]->{_id, slug, name}
}
`;
	const data = await client.fetch(query);
	return data;
}

export default async function Home() {
	const data: BlogCard[] = await getData();

	return (
    <>
      <Header
        title="Welcome to  Simple Blog"
        subtitle="A blog built to practice Next.js and Sanity.io integration"
      />
      <Tags />
      <RecentPosts />
      <PostsGrid posts={data} />
    </>
  );
}
