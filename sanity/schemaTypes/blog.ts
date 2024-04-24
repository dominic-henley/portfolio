// @ts-nocheck
import { defineType, defineField } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { 
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
})