<template>
  <Clock :blink="true"/>
</template>

<script>
const Clock = require('../Clock');

module.exports = {
  name: 'app',
  components: {
    Clock,
  },
};
</script>

<style>
  .clock {
    background-color: #263238;
    color: #eceff1;
    padding: .3rem .6rem;
    font-size: 3rem;
    font-family: 'Menlo', monospace;
  }
</style>
