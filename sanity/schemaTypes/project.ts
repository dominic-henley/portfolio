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
      name: 'status',
      type: 'string',
      options: {
        list: ['Done', 'Work In Progress'],
      }
    },
    {
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'altText',
      type: 'string',
    },
    {
      name: 'skills',
      type: 'array',
      of: [ {type: 'string'} ]
    },
    {
      name: 'body',
      type: 'array',
      of: [ {type: 'block'} ]
    },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'blog' }]
    }
  ]
})