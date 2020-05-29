'use strict'

const CONTENT_TYPE = require('../content_type')

/**
 * Map of regex strings to content types that follow their appearances. For
 * information on the structure of each block, see
 * {@link module:readme-export-parser.CONTENT_TYPE|Content Types}
 *
 * @memberof module:readme-export-parser
 * @private
 * @enum {string}
 * @constant
 * @readonly
 */
const BLOCK_TRANSITIONS = {
  /**
   * Regex string for start of a code block.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockCodeData
   */
  '^\\[block:code\\]$': CONTENT_TYPE.CODE,

  /**
   * Regex string for start of an image block.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockImageData
   */
  '^\\[block:image\\]$': CONTENT_TYPE.IMAGE,

  /**
   * Regex string for start of a callout block.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockCalloutData
   */
  '^\\[block:callout\\]$': CONTENT_TYPE.CALLOUT,

  /**
   * Regex string for start of a parameters block.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockParametersData
   */
  '^\\[block:parameters\\]$': CONTENT_TYPE.PARAMETERS,

  /**
   * Regex string for start of an API header block.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockAPIHeaderData
   */
  '^\\[block:api\\-header\\]$': CONTENT_TYPE.API_HEADER,

  /**
   * Regex string for the end of a block, and the start of a new markdown
   * block.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockMarkdownData
   */
  '^\\[\\/block\\]$': CONTENT_TYPE.MARKDOWN
}

module.exports = BLOCK_TRANSITIONS
