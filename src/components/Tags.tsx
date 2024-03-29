import React from 'react';
import { client } from '@/lib/sanity';
import { Tag } from '@/lib/interface';
import Link from 'next/link';
import { Button } from './ui/button';
import SectionHeader from "./SectionHeader";
async function getAllTags() {
  const query = `*[_type == 'tag']{name, slug, _id,  "postCount": count(*[_type == "post" && references("tags", ^._id)])}`;
  const tags = await client.fetch(query);

  return tags;
}

export const revalidate = 3600;
const Tags = async () => {
  const tags: Tag[] = await getAllTags();
  return (
    <div className="py-10 px-4 flex flex-col items-center justify-center border-b dark:border-primary">
      <SectionHeader title="View post by categories" subtitle="tags" />
      <div className="flex lg:flex-row flex-col flex-wrap justify-center items-center">
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Button asChild key={tag?._id} className="m-2 px-6">
              <Link href={`/tag/${tag.slug.current}`}>
                {tag?.name}({tag?.postCount})
              </Link>
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Tags;
