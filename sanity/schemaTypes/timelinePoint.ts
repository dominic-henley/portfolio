// @ts-nocheck
import { defineType } from 'sanity'

export const timelinePointType = defineType({
  name: 'timelinePoint',
  type: 'document',
  fields: [
    { 
      name: 'date', 
      type: 'date',
      options: {
        dateFormat: 'MMM-YYYY'
      }
    },
    { name: 'title', type: 'string'},
    { 
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
})