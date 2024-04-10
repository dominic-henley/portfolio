// @ts-nocheck
import { defineType, defineField } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  fields: [
    { name: 'Title', type: 'string' },
    { 
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
})