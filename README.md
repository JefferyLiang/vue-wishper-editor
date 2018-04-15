# wishper-editor

> A Vue easy to use editor

This editor used in my blog, so I will continuous support it.

And this editor referenced to `Tmublr` editor.

I like the concise editor, so I build it.

If you want to use this editor and meet some problem, you can come to the project github and write a issues.

## Installation

use the npm to install this package

```bash
$ npm i vue-wishper -S
```

download in Github

```
git clone https://github.com/JefferyLiang/vue-wishper-editor.git vue-wishper-editor
```

## Usage

require the package in your vue project

```javascript
// base
const Vue = require('vue')
const WishperEditor = require('vue-wishper-editor')

// es6
import Vue from 'vue'
import WishperEditor from 'vue-wishper-editor'

Vue.use(WishperEditor)
```

use in vue component

```html
<template>
  <div class="container">
    ...
    <w-editor v-model="editor_content"></w-editor>
    ...
  </div>
</template>

<script>
export default {
  data () {
    return {
      editor_content: ''
    }
  }
}
</script>
```

## Config

Set the editor font size like this

```html
<w-editor :font-size="15"></w-editor>
<!-- now the editor font size is 15px -->
```

Set the editor font color like this

```html
<w-editor :font-color="black"></w-editor>
<!-- now the font color is black -->
<!-- of course, you can use the rgb in this -->
```

Set the input placeholder like this

```html
<w-editor :placeholder="输入内容"></w-editor>
```