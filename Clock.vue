<template>
  <time class="clock">
    <span class="clock__hour">{{ hours }}</span>:<span class="clock__minutes">{{ minutes }}</span>
  </time>
</template>

<script>
function padZero(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

function getDate() {
  return new Date();
}

function getMinutes() {
  return padZero(getDate().getMinutes());
}

function getHour() {
  return padZero(getDate().getHours());
}

export default{
  name: 'clock',

  data() {
    return {
      ticker: null,
      minutes: getMinutes(),
      hours: getHour(),
    };
  },

  created() {
    this.ticker = setInterval(() => {
      this.minutes = getMinutes();
      this.hours = getHour();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.ticker);
  },
};
</script>
