// @ts-nocheck
import { defineType, defineField } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
      }
    },
    { name: 'thumbnail', type: 'image' },
    { name: 'publishDate', type: 'datetime' },
    { 
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
})