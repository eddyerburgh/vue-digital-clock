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

const clock = {
  name: 'clock',
  data() {
    return {
      minutes: getMinutes(),
      hours: getHour(),
    };
  },
  created() {
    setInterval(() => {
      this.minutes = getMinutes();
      this.hours = getHour();
    }, 1000);
  },
};

export default clock;
</script>
