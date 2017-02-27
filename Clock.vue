<template>
  <time class="clock">
    <span class="clock__hour">{{ hours }}</span>:<span class="clock__minutes">{{ minutes }}</span>
  </time>
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
  created() {
    const self = this;
    setInterval(() => {
      self.hours = padZero(getDate().getHours());
      self.minutes = padZero(getDate().getMinutes());
    }, 2000);
  },
};

export default clock;
</script>
