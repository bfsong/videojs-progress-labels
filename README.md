# videojs-progress-labels

## Installation
```
$ npm install --save videojs-progress-labels
```

## Usage
```javascript
import VjsLabels from 'videojs-progress-labels'

...

//init player
playerOptions: {
  ...
  plugins: {
    progressLabels: {}
  }
}

...

//add labels
player.progressLabels({
  tips: [{
      seconds: 300,
      text: '哈哈2',
      class: 'red'
  }, {
      seconds: 500,
      text: '提示文字3',
      class: 'yellow'
  }, {
      seconds: 1800,
      text: '文字内容1',
      class: 'blue'
  }]
})

```

## Styles
use your own style
```css
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
.blue {
  background-color: blue;
}
```

## license
MIT
