import React from 'react';
import { client, urlFor } from '@/lib/sanity';
import { BlogPost } from '@/lib/interface';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PostComponent from '@/components/PostComponent';

export const revalidate = 30;

async function getData(slug: string) {
	const query = `*[_type=='post' && slug.current == '${slug}']{
    title, 
    description, 
    'currentSlug':slug.current, 
    titleImage, 
    content, 
    publishedAt, 
    author, 
    "tags": tags[]->{
        name, 
        'slug': slug.current,
		_id
    },
	_id
}[0]`;

	const data = await client.fetch(query);
	return data;
}
export default async function SinglePost({
	params,
}: {
	params: { slug: string };
}) {
	const data: BlogPost = await getData(params.slug);

	return (
		<div className="max-w-3xl flex flex-col justify-center m-auto mt-8">
			<PostComponent data={data} />
			<Button asChild className="w-full my-7">
				<Link href="/">Back to Home</Link>
			</Button>
		</div>
	);
}
