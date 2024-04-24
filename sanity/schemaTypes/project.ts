// @ts-nocheck
import { defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  type: 'document',
  fields: [
    { name: 'projectName', type: 'string' },
    {
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'MMM-YYYY'
      }
    },
    {
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }
  ]
})