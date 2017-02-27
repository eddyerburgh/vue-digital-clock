<template>
  <div>
    <div class="hour">{{ hours }}</div>
    <div class="minutes">{{ minutes }}</div>
  </div>
</template>

<script>
function getDate() {
  return new Date();
}

function padZero(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

const clock = {
  name: 'clock',
  data() {
    return {
      minutes: padZero(getDate().getMinutes()),
      hours: padZero(getDate().getHours()),
    };
  },
};

export default clock;

setInterval(() => {
  const date = new Date();
  clock.hours = padZero(date.getHours());
  clock.minutes = padZero(date.getMinutes());
}, 1000);
</script>
