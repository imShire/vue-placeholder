# vue-placeholder

vue-placeholder([placeholder.js](https://github.com/hustcc/placeholder.js/blob/master/README.md)) component for vue.js(2.X),support pc and mobile. [中文Readme帮助文档](README-zh.md)

## 1、Demo & Preview

![screenshots/website.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/website.png)

![screenshots/with_chinese.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/with_chinese.png)

## 2、Usage

Include vue-placeholder in your project:

### Install vue-awesome-swiper

```sh
npm install vue-awesome-swiper --save
```

### Vue mount

```javascript
// import

import VuePlaceholder from 'vue-placeholder';

// or require

var VuePlaceholder = require("vue-placeholder");

// mount with global
Vue.use(VuePlaceholder)

// mount with component
import VuePlaceholder from 'vue-placeholder'

export default {
  components: {
    VuePlaceholder
  }
}
```

UMD import is supported, then get global object: VuePlaceholder.

## 3、vue-placeholder options

- `size`: The size of placeholder. Example: `256x256`, Default: `256x128`.
- `bgcolor`: Background color. Example: `#969696`. Default: `random`.
- `color`: Foreground (text) color. Example: `#ccc`. Default: `#FFF`.
- `text`: Custom text. Example: `Hello World, 你好`. Default: equal to `size`.
- `fstyle`: Custom text font. Can be `normal / italic / oblique`. Default: `normal`.
- `fweight`: Custom text weight. Can be `normal / bold / bolder / lighter / Number`. Default: `normal`.
- `fsize`: Custom text size. Default: `automation` calculate to avoid text overflow.
- `ffamily`: Custom text family. Default: `consolas`.

For Example, use as var to function input:

```javascript
<v-placeholder size="512x256" bgcolor="#ccc"  color="#969696" text="Hello World 你好" fstyle="oblique" fweight="bold" fsize="40" ffamily='consolas'></v-placeholder>
```

## 4、API

placeholder.js API and configuration can be used.

[placeholder.js zh](https://github.com/hustcc/placeholder.js/blob/master/README-zh.md)

[placeholder.js en](https://github.com/hustcc/placeholder.js/blob/master/README.md)

## 5、LICENSE

MIT
