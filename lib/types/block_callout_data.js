'use strict'

/**
 * ReadMe `[block:callout]` data structure, as embedded in their markdown
 * export format. Represents a highlighted visual block of text with a title,
 * and highlight color varying by type.
 *
 * @typedef {object} module:readme-export-parser.BlockCalloutData
 * @property {string} type - 'warning', 'info', 'error', or 'success'
 * @property {string} title - title (markdown)
 * @property {string} body - body (markdown)
 */
