'use strict'

/**
 * ReadMe content types; JSON data structures are parsed as-is, with the
 * exception of CODE elements which receive minor formatting on the internal
 * code strings, with the object structure remaining the same..
 *
 * @memberof module:readme-export-parser
 * @private
 * @enum {string}
 * @constant
 * @readonly
 */
const CONTENT_TYPE = {
  /**
   * Markdown block, containing newlines.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockMarkdownData
   */
  MARKDOWN: 'MARKDOWN',

  /**
   * Image block, containing one or more images with URL, filename, and
   * caption fields
   *
   * @type {string}
   * @see module:readme-export-parser.BlockImageData
   */
  IMAGE: 'IMAGE',

  /**
   * Has one or more code blocks, may be flagged for rendering in the sidebar
   *
   * @type {string}
   * @see module:readme-export-parser.BlockCodeData
   */
  CODE: 'CODE',

  /**
   * JSON object meant to be displayed as a visually highlighted block of text.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockCalloutData
   */
  CALLOUT: 'CALLOUT',

  /**
   * JSON object representing a header
   *
   * @type {string}
   * @see module:readme-export-parser.BlockAPIHeaderData
   */
  API_HEADER: 'API_HEADER',

  /**
   * JSON object representing a set of possible API endpoint field values
   * (enum); ReadMe organizes it as a set of x/y table coordinate keys mapped
   * to label values.
   *
   * @type {string}
   * @see module:readme-export-parser.BlockParametersData
   */
  PARAMETERS: 'PARAMETERS'
}

module.exports = CONTENT_TYPE
