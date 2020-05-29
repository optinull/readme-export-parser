'use strict'

/**
 * ReadMe `[block:parameters]` data structure, as embedded in their markdown
 * export format. Represents a table of possible API endpoint field values
 * (enum) as x/y table coordinates mapped to their contents, with headers
 * having an 'h' X coord.
 *
 * @typedef {object} module:readme-export-parser.BlockParametersData
 * @property {object} data - map of x/y coords to cell contents. Headers have
 *   an 'h' X coordinate, with normal cells starting at index 0. Cell contents
 *   are markdown.
 * @property {number} rows - row count
 * @property {number} cols - col count
 */
