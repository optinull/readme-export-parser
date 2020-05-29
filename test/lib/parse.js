/* eslint-env mocha */
'use strict'

const { assert } = require('chai')
const _isArray = require('lodash/isArray')
const _isEmpty = require('lodash/isEmpty')
const _isObject = require('lodash/isObject')

const parse = require('../../lib/parse')

const TITLE = 'Document Title'
const EXCERPT = 'A subtitle of sorts'
const SLUG = 'some-document'
const HIDDEN = false
const CREATED_AT = new Date().toISOString()
const UPDATED_AT = new Date().toISOString()
const FRONT_MATTER = [
  '---',
  `title: "${TITLE}"`,
  `excerpt: "${EXCERPT}"`,
  `slug: "${SLUG}"`,
  `hidden: ${HIDDEN}`,
  `createdAt: "${CREATED_AT}"`,
  `updatedAt: "${UPDATED_AT}"`,
  '---'
].join('\n')

const buildSrc = src => `${FRONT_MATTER}\n${src}`

// TODO: Expand, this is basically a stub
describe('parse', () => {
  it('parses front matter', () => {
    const src = buildSrc('')
    const data = parse(src)
    const {
      id, title, description, slug, hidden, createdAt, updatedAt, elements
    } = data

    assert.strictEqual(id, SLUG.replace(/-/g, '_'))
    assert.strictEqual(title, TITLE)
    assert.strictEqual(description, EXCERPT)
    assert.strictEqual(slug, SLUG)
    assert.strictEqual(hidden, HIDDEN)
    assert.strictEqual(createdAt.toISOString(), CREATED_AT)
    assert.strictEqual(updatedAt.toISOString(), UPDATED_AT)

    assert(_isArray(elements))
    assert(_isEmpty(elements))
  })

  it('parses markdown blocks', () => {
    const md = '# Header\n\nBody **content**'
    const src = buildSrc(md)
    const data = parse(src)
    const { elements } = data
    assert(!_isEmpty(elements))

    const [block] = elements
    assert(_isObject(block))

    const { content } = block
    assert.strictEqual(content, md)
  })
})
