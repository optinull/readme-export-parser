'use strict'

/**
 * An object containing all data from a parsed RIO markdown file.
 *
 * @typedef {object} module:readme-export-parser.DocumentData
 * @property {string} title - title from src front matter
 * @property {string} description - description from src front matter
 * @property {string} slug - slug parsed from src front matter
 * @property {string} id - slug in snake-case
 * @property {boolean} hidden - hidden flag
 * @property {Date} createdAt - creation timestamp as Date
 * @property {Date} updatedAt - last update timestamp as Date
 * @property {Array<(
 *   module:readme-export-parser.BlockCalloutData|
 *   module:readme-export-parser.BlockAPIHeaderData|
 *   module:readme-export-parser.BlockParametersData|
 *   module:readme-export-parser.BlockCodeData|
 *   module:readme-export-parser.BlockImageData|
 *   module:readme-export-parser.BlockMarkdownData
 * )>} elements - array of parsed document blocks
 */
