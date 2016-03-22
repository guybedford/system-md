plugin-md
=========

Markdown loader for SystemJS

# Overview

A plugin for [SystemJS](https://github.com/systemjs/systemjs) which enables you to import markdown files directly. The files are compiled in the browser to HTML using [showdown](https://github.com/showdownjs/showdown).

# Installation

For installing with JSPM run:

```sh
jspm install md
```

# Basic Use

```js
import readmeHTML from './readme.md!'
```

# Configuration

[Showdown configuration options](https://github.com/showdownjs/showdown#valid-options) are passed via "mdOptions".

## Either: use the meta tag

```js
System.config({
  meta: {
    '*.md': {
      loader: './md.js',
      mdOptions: {
        'tables': true
      }
    }
  }
});
```

## Or: using packages configuration

```js
System.config({
  packages: {
    'src': {
      meta: {
        "*.md": {
          loader: './md.js',
          mdOptions: {
            tables: true
          }
        }
      }
    }
  }
});
```
