'use strict'

/**
 * ReadMe `[block:code]` data structure, as embedded in their markdown
 * export format. Represents **one or more** code samples, in potentially
 * varing languages, meant to be rendered either inline or in a sidebar.
 *
 * @typedef {object} module:readme-export-parser.BlockCodeData
 * @property {module:readme-export-parser.CodeSnippet[]} codes - array of
 *   code samples, to be displayed in a tabbed container or equivalent
 *   (mutually exclusive rendering is implied)
 * @property {boolean} sidebar - if true, the code samples should be rendered
 *   in a sidebar next to content, otherwise inline.
 */
