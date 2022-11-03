## Installation

#### npm

```sh
$ npm install vue3-dragscroll
```

Then, in your JavaScript file:

```js
// Register dragscroll globally
import Vue3Dragscroll from 'vue3-dragscroll'
Vue.use(VueDragscroll)
```

## Usage

Add the `v-dragscroll` directive to a scrollable element:

```html
<div v-dragscroll>
    Big text goes here...
</div>
```