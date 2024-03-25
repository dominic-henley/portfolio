// @ts-nocheck
import { defineType, defineField } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  fields: [
    { name: 'Title', type: 'string' },
    { 
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
})