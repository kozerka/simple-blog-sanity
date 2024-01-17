import { BlogCard } from '@/lib/interface';
import { client } from '@/lib/sanity';
import CardComponent from '@/components/CardComponent';

export const revalidate = 30;
async function getData() {
	const query = `*[_type == 'post'] | order(_createdAt desc) {
  title, description, 'currentSlug':slug.current, titleImage
}
`;
	const data = await client.fetch(query);
	console.log(data);
	return data;
}

export default async function Home() {
	const data: BlogCard[] = await getData();

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-5">
			{data.map((post) => (
				<CardComponent key={post.currentSlug} post={post} />
			))}
		</div>
	);
}
