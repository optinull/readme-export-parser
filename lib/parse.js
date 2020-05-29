'use strict'

const _keys = require('lodash/keys')
const _isEmpty = require('lodash/isEmpty')
const matter = require('gray-matter')

const CONTENT_TYPE = require('./content_type')
const BLOCK_TRANSITIONS = require('./blocks/transitions')
const BLOCK_TRANSFORMERS = require('./blocks/transformers')

/**
 * Parses a string of ReadMe markdown to a
 * {@link module:readme-export-parser.DocumentData|Document Data} object.
 *
 * @memberof module:readme-export-parser
 *
 * @param {string} mdString - readme export format markdown string
 * @returns {module:readme-export-parser.DocumentData} documentData
 */
const parse = (mdString) => {
  const { content, data } = matter(mdString)
  const { title, slug, excerpt, hidden, createdAt, updatedAt } = data
  const lines = content.split('\n')
  const documentData = {
    slug,
    title,
    hidden,
    id: slug.replace(/-/g, '_'),
    description: (excerpt || '').replace(/\n/g, ' '),
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt)
  }

  const elements = []
  const transitionTests = _keys(BLOCK_TRANSITIONS)

  let blockType = CONTENT_TYPE.MARKDOWN
  let blockContent = []

  for (let i = 0; i < lines.length; i += 1) {
    const l = lines[i].trim()

    let lineIsBlockMarker = false
    let blockTypeChanged = false
    let nextBlockType = null

    for (let j = 0; j < transitionTests.length; j += 1) {
      lineIsBlockMarker = new RegExp(transitionTests[j]).test(l)

      if (!lineIsBlockMarker) {
        continue
      }

      const detectedType = BLOCK_TRANSITIONS[transitionTests[j]]

      if (i === 0) { // initial type
        blockType = detectedType
      } else if (blockType !== detectedType) {
        blockTypeChanged = true
        nextBlockType = detectedType
      }

      break
    }

    if (!lineIsBlockMarker) {
      blockContent.push(l)
    }

    // Either block transition, or entire file was one block type
    if (blockTypeChanged || i === lines.length - 1) {
      if (!_isEmpty(blockContent)) {
        const content = BLOCK_TRANSFORMERS[blockType](blockContent)

        if (!_isEmpty(content)) {
          elements.push({ type: blockType, content })
        }
      }

      blockType = nextBlockType
      blockContent = (
        nextBlockType === CONTENT_TYPE.MARKDOWN && l !== '[/block]'
      ) ? [l] // Start of markdown is a valid content line
        : []
    }
  }

  documentData.elements = elements

  return documentData
}

module.exports = parse
