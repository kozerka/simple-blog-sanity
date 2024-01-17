export interface BlogCard {
	title: string;
	description: string;
	currentSlug: string;
	titleImage: any;
	_id: string;
	tags: Array<Tag>;
}
export interface BlogPost {
	title: string;
	description: string;
	currentSlug: string;
	titleImage: any;
	content: any;
	publishedAt: string;
	author: string;
	tags: Array<Tag>;
	_id: string;
}

export interface Tag {
	name: string;
	slug: { current: string };
	_id: string;
}

export interface Params {
	params: {
		slug: string;
	};
}