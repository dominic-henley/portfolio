import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './schemaTypes/blog'
import { timelinePointType } from './schemaTypes/timelinePoint'
import { projectType } from './schemaTypes/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ blogType, timelinePointType, projectType ],
}
