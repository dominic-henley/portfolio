// @ts-nocheck
import { defineType } from 'sanity'

export const timelinePointType = defineType({
  name: 'timelinePoint',
  type: 'document',
  fields: [
    { name: 'Date', type: 'string'}, // normally this would be datetime but flowbite-react timelines accept strings
    { name: 'Title', type: 'string'},
    { name: 'Body',
      type: 'array',
      of: [{ type: 'block' }]}
  ]
})