import { PortableTextBlock } from "@portabletext/react";

// See https://www.sanity.io/docs/presenting-block-text#ac67a867dd69
export const portableToPlainText = (blocks : PortableTextBlock[]) : string => {
  
    return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}