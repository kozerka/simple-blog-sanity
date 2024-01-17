import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { BlogCard } from '@/lib/interface';
import { Button } from './ui/button';
import Link from 'next/link';

interface CardComponentProps {
	post: BlogCard;
}

export default function CardComponent({ post }: CardComponentProps) {
	return (
		<Card className="overflow-hidden rounded-lg flex flex-col">
			<div className="relative w-full h-[300px] flex-shrink-0">
				<Image
					src={urlFor(post?.titleImage).url()}
					alt={post?.title}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<CardContent className="flex flex-col flex-grow p-4">
				<div className="flex-grow">
					<h3 className="text-2xl mb-2">{post?.title}</h3>
					<div>
						{post?.tags?.map((tag) => (
							<span
								key={tag?._id}
								className="text-sm text-white bg-slate-800 rounded-md py-1 px-3 dark:text-gray-800 dark:bg-slate-100 mr-2"
							>
								{tag?.name}
							</span>
						))}
					</div>
					<p className="line-clamp-3 text-sm mt-3 text-gray-600 dark:text-gray-200">
						{post?.description}
					</p>
				</div>
				<Button asChild className="w-full mt-7">
					<Link href={`/blog/${post?.currentSlug}`}>Read more</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
