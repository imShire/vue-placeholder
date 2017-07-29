# vue-placeholder

用于vue.js(2.X)的vue-placeholder([placeholder.js](https://github.com/hustcc/placeholder.js/blob/master/README.md)) 组件,支持PC和移动端。[EN-Readme](README.md)

## 一、预览

![screenshots/website.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/website.png)

![screenshots/with_chinese.png](https://raw.githubusercontent.com/hustcc/placeholder.js/master/screenshots/with_chinese.png)

## 二、使用

引入 vue-placeholder 到你的项目中:

### Install vue-placeholder

```sh
npm install vue-placeholder --save
```

### Vue mount

```javascript
// import

import VuePlaceholder from 'vue-placeholder';

// or require

var VuePlaceholder = require("vue-placeholder");

// 全局引入
Vue.use(VuePlaceholder)

// 局部引入
import VuePlaceholder from 'vue-placeholder'

export default {
  components: {
    VuePlaceholder
  }
}
```

支持UMD加载，得到的对象（如全局对象VuePlaceholder）。

## 三、vue-placeholder 配置项

- `size`: vue-placeholder图片尺寸. 例如: `256x256`, 默认: `256x128`.
- `bgcolor`: 背景颜色. 例如: `#969696`. 默认: `random`.
- `color`: 前景颜色，文字颜色. 例如: `#ccc`. 默认: `#FFF`.
- `text`: 自定义文本内容. 例如: `Hello World, 你好`. 默认: equal to `size`.
- `fstyle`: 字体样式. 可以是 `normal / italic / oblique`. 默认: `normal`.
- `fweight`: 字体weight. 可以是 `normal / bold / bolder / lighter / Number`. 默认: `normal`.
- `fsize`: 字体大小. 默认: `自动` 计算字体大小防止文字超出图片大小.
- `ffamily`: 字体. 默认: `consolas`.

具体参数配置例子:

```javascript
<v-placeholder size="512x256" bgcolor="#ccc"  color="#969696" text="Hello World 你好" fstyle="oblique" fweight="bold" fsize="40" ffamily='consolas'></v-placeholder>
```

## 四、API

placeholder.js API and configuration can be used.

[placeholder.js zh](https://github.com/hustcc/placeholder.js/blob/master/README-zh.md)

[placeholder.js en](https://github.com/hustcc/placeholder.js/blob/master/README.md)

## 五、LICENSE

MIT
