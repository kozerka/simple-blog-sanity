export interface BlogCard {
	title: string;
	description: string;
	currentSlug: string;
	titleImage: any;
}
export interface BlogPost {
	title: string;
	description: string;
	currentSlug: string;
	titleImage: any;
	content: any;
	publishedAt: string;
	author: string;
	tags: any;
}