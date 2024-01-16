import { Card } from '@/components/ui/card';
import { blogCard } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

async function getData() {
	const query = `*[_type == 'post'] | order(_createdAt desc) {
  title, description, 'currentSlug':slug.current, titleImage
}
`;
	const data = await client.fetch(query);
	return data;
}

export default async function Home() {
	const data: blogCard[] = await getData();

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-5">
			{data.map((post, index) => (
				<Card key={index} className="overflow-hidden rounded-lg">
					<div className="relative w-full h-[300px]">
						<Image
							src={urlFor(post.titleImage).url()}
							alt={post.title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="p-4">
						<h3 className="text-2xl mb-2">{post.title}</h3>
						<p>{post.description}</p>
					</div>
				</Card>
			))}
		</div>
	);
}
