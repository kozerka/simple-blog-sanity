import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { BlogCard } from '@/lib/interface';

interface CardComponentProps {
	post: BlogCard;
}

export default function CardComponent({ post }: CardComponentProps) {
	return (
		<Card className="overflow-hidden rounded-lg">
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
	);
}
