import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { BlogCard } from "@/lib/interface";
import Link from "next/link";
import { Button } from "./ui/button";

interface SmallCardProps {
  post: BlogCard;
}

export default function SmallCard({ post }: SmallCardProps) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden relative">
      <div className="relative w-full h-48">
        <Image
          src={urlFor(post?.titleImage).url()}
          alt={post?.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Button asChild className="absolute bottom-5 w-full translate-y-1/2">
        <Link href={`/blog/${post?.currentSlug}`}>Read more</Link>
      </Button>
    </div>
  );
}
