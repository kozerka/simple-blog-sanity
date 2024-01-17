import {Rule} from 'sanity'
export const post = {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      title: 'Title of blog post',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Title is required'),
    },
    {
      name: 'slug',
      title: 'Slug for blog post',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) =>
        Rule.max(200).warning('Description should not exceed 200 characters.'),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
  ],
}
