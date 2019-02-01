<template>
  <time class="clock">
    <span class="clock__hour">{{ hours }}</span
    ><!--
    --><span
      class="clock__colon"
      :style="{
        visibility: !blink || seconds % 2 === 0 ? 'visible' : 'hidden'
      }"
      >:</span
    ><!--
    --><span class="clock__minutes">{{ minutes }}</span
    ><!--
    --><span
      class="clock__colon"
      v-if="displaySeconds"
      :style="{
        visibility: !blink || seconds % 2 === 0 ? 'visible' : 'hidden'
      }"
      >:</span
    ><!--
    --><span v-if="displaySeconds" class="clock__seconds">{{ seconds }}</span
    ><!--
    --><span v-if="twelveHour" class="clock__ampm">{{ amPm }}</span>
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

const getHour = twelveHour => {
  let hours = getDate().getHours();
  if (twelveHour && hours > 12) {
    hours = hours - 12;
  }
  return padZero(hours);
};

const getAmPm = () => (getDate().getHours() > 12 ? "pm" : "am");

export default {
  name: "vue-digital-clock",

  props: ["blink", "displaySeconds", "twelveHour"],

  data() {
    return {
      ticker: null,
      minutes: getMinutes(),
      hours: getHour(this.twelveHour),
      seconds: getSeconds(),
      amPm: getAmPm()
    };
  },

  created() {
    this.ticker = setInterval(() => {
      this.minutes = getMinutes();
      this.hours = getHour(this.twelveHour);
      this.seconds = getSeconds();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.ticker);
  }
};
</script>
