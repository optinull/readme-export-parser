# Readme Export Parser

A tiny library for parsing markdown files exported from
[ReadMe](https://readme.com/). Provides a single function as the default
export, `parse`, and a set of [JSDoc](https://jsdoc.app/) type definitions for
the various content block types.

## Usage

The only export is a function that takes a ReadMe markdown string as its only
argument, and returns a document data object. The following:

```js
const fs = require('fs')
const parseReadmeMarkdown = require('readme-export-parser')

const srcMD = fs.readFileSync('/path/to/export/file.md', 'utf-8')
const data = parseReadmeMarkdown(srcMD)

console.log(JSON.stringify(data, null, 2))
```

Would output something along the lines of:

```json
{
  "id": "file_id",
  "slug": "file_id_snake_case",
  "title": "Documentation",
  "description": "Content from 'excerpt' front matter data",
  "elements": [{
    "type": "MARKDOWN",
    "content": "### A Header\n\nSome content **follows**"
  }, {
    "type": "CODE",
    "content": {
      "codes": [{
        "code": "const example = () => {}\nconst var = 42",
        "language": "javascript",
        "name": "Example"
      }]
    }
  }, {
    "type": "CALLOUT",
    "content": {
      "type": "info",
      "title": "Some Notice",
      "body": "A notice body\n\n**As markdown**"
    }
  }]
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
