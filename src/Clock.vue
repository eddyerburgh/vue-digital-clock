<template>
  <time class="clock">
    <span class="clock__hour">{{ hours }}</span
    ><!--
    --><span v-if="!blink || seconds % 2 === 0">:</span
    ><!--
    --><span v-else>&nbsp;</span
    ><!--
    --><span class="clock__minutes">{{ minutes }}</span
    ><!--
    --><span v-if="displaySeconds && (!blink || seconds % 2 === 0)">:</span
    ><!--
    --><span v-else-if="displaySeconds">&nbsp;</span
    ><!--
    --><span v-if="displaySeconds" class="clock__seconds">{{ seconds }}</span>
  </time>
</template>

<script>
function padZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

const getDate = () => new Date();

const getSeconds = () => padZero(getDate().getSeconds());

const getMinutes = () => padZero(getDate().getMinutes());

const getHour = () => padZero(getDate().getHours());

export default {
  name: "vue-digital-clock",

  props: ["blink", "displaySeconds"],

  data() {
    return {
      ticker: null,
      minutes: getMinutes(),
      hours: getHour(),
      seconds: getSeconds()
    };
  },

  created() {
    this.ticker = setInterval(() => {
      this.minutes = getMinutes();
      this.hours = getHour();
      this.seconds = getSeconds();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.ticker);
  }
};
</script>
