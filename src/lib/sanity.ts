import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	projectId: 'imtwr3o9',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
