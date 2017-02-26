<template>
  <div>
    <div class="hour">{{ hours }}</div>
    <div class="minutes">{{ minutes }}</div>
  </div>
</template>

<script>
function getDate() {
  return new Date()
}
const clock = {
  name: 'clock',
  data() {
    return {
      minutes: getDate().getMinutes(),
      hours: getDate().getHours(),
    };
  },
};

export default clock;

setInterval(() => {
  const date = new Date();
  clock.hours = date.getHours();
  clock.minutes = date.getMinutes();
}, 1000);
</script>
