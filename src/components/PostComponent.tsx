import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { BlogPost } from '@/lib/interface';
import { Tag } from 'lucide-react';
import { urlFor } from '@/lib/sanity';

interface PostProps {
	data: BlogPost;
}

const PostComponent: React.FC<PostProps> = ({ data }) => {
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		};
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<div>
			<div className="flex items-center justify-center mb-8">
				<div className="w-1/4 h-0.5 bg-gray-500 dark:bg-gray-300 opacity-20"></div>
				<h4 className="text-3xl mx-4 leading-8 text-gray-900 dark:text-gray-100 sm:text-4xl text-center">
					{data.title}
				</h4>
				<div className="w-1/4 h-0.5 bg-gray-500 dark:bg-gray-300 opacity-20"></div>
			</div>

			<div className="relative overflow-hidden rounded-lg">
				<Image
					src={urlFor(data.titleImage).url()}
					alt="title image"
					width={800}
					height={800}
					priority
					className="rounded-lg"
				/>
				<div className="absolute bottom-0 right-0 flex p-2 bg-red-500 rounded-tl-lg">
					{data.tags?.map((tag: any, index: number) => (
						<span
							key={index}
							className="text-xs text-white mx-4 flex items-center"
						>
							<Tag size={20} className="mr-1" /> {tag.name}
						</span>
					))}
				</div>
			</div>

			<div className="mt-8 prose dark:prose-invert w-full max-w-none prose-headings:font-semibold prose-li:marker:text-primary">
				<PortableText value={data.content} />
			</div>

			<p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
				<span className="font-medium">Author:</span> {data.author}
			</p>

			<p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
				<span className="font-medium">Published at:</span>{' '}
				{formatDate(data.publishedAt)}
			</p>
		</div>
	);
};

export default PostComponent;
