// @ts-nocheck
import { defineType, defineField } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'thumbnail', type: 'image' },
    { name: 'publishDate', type: 'datetime' },
    { 
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
})