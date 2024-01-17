import CardComponent from '@/components/CardComponent';
import Header from '@/components/Header';
import { BlogPost, Params } from '@/lib/interface';
import { client } from '@/lib/sanity';
import React from 'react';

async function getPostByTag(tag: string) {
	const query = `*[_type == 'post' && references(*[_type == 'tag' && slug.current == '${tag}']._id)]{
    title,
    description,
    'currentSlug':slug.current,
    titleImage,
    publishedAt,
    author,
    tags[]->{_id, name, slug}
}
`;
	const posts = await client.fetch(query);
	return posts;
}
const PostByTagPage = async ({ params }: Params) => {
	const posts: Array<BlogPost> = await getPostByTag(params.slug);
	return (
		<div>
			<Header title={`#${params.slug}`} />
			{posts?.length > 0 &&
				posts?.map((post) => <CardComponent key={post?._id} post={post} />)}
		</div>
	);
};

export default PostByTagPage;
