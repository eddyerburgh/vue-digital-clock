# vue-digital-clock

> A digital clock component built with Vue.js

## Installation

With NPM:
```shell
npm install --save vue-digital-clock
```

With Yarn
```shell
yarn add vue-digital-clock
```

And import it into your project
```javascript
import Clock from 'vue-digital-clock'
```

## Props

| Prop    | Type | Usage  |
| ------  | ---- | ------ |
| blink   | Boolean | Set as true to have the semi colon blink with the seconds|



## Example

```vue
<template>
  <Clock :blink="true" />
</template>

<script>
import Clock from 'vue-digital-clock'

export default {
  name: 'app',
  components: {
    Clock,
  },
}
</script>
```
## Screenshot

![vue-digital-clock screenshot](https://raw.githubusercontent.com/eddyerburgh/vue-digital-clock/master/assets/vue-digital-clock.gif)
