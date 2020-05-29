'use strict'

const CONTENT_TYPE = require('../content_type')

/**
 * @memberof module:readme-export-parser
 * @enum {Function}
 * @private
 * @constant
 * @readonly
 */
const BLOCK_TRANSFORMERS = {
  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {string} md - single markdown string containing '\n' line breaks
   */
  [CONTENT_TYPE.MARKDOWN]: v => v.join('\n'),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:readme-export-parser.BlockCodeData} data
   */
  [CONTENT_TYPE.CODE]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:readme-export-parser.BlockCalloutData} data
   */
  [CONTENT_TYPE.CALLOUT]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:readme-export-parser.BlockImageData} data
   */
  [CONTENT_TYPE.IMAGE]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:readme-export-parser.BlockAPIHeaderData} data
   */
  [CONTENT_TYPE.API_HEADER]: v => JSON.parse(v.join('')),

  /**
   * @param {string[]} v - array of lines commprising the block
   * @returns {module:readme-export-parser.BlockParametersData} data
   */
  [CONTENT_TYPE.PARAMETERS]: v => JSON.parse(v.join(''))
}

module.exports = BLOCK_TRANSFORMERS
