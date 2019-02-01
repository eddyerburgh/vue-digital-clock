<template>
  <ClockComponent :blink="true" :displaySeconds="true" />
</template>

<script>
import ClockComponent from "../src/Clock.vue";

export default {
  components: {
    ClockComponent
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
