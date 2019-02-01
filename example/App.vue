<template>
  <digital-clock :blink="true" :displaySeconds="true" />
</template>

<script>
import DigitalClock from "../src/Clock.vue";

export default {
  components: {
    DigitalClock
  }
};
</script>

<style>
.clock {
  background-color: #263238;
  color: #eceff1;
  padding: 0.3rem 0.6rem;
  font-size: 3rem;
  font-family: "Menlo", monospace;
}
</style>
