<template>
  <time class="clock">
    <span class="clock__hour">{{ hours }}</span><!--
    --><span class="clock__colon" :style="{ visibility: (!blink || seconds % 2 === 0) ? 'visible' : 'hidden' }">:</span><!--
    --><span class="clock__minutes">{{ minutes }}</span><!--
    --><span class="clock__colon" v-if="displaySeconds" :style="{ visibility: (!blink || seconds % 2 === 0) ? 'visible' : 'hidden' }">:</span><!--
    --><span v-if="displaySeconds" class="clock__seconds">{{ seconds }}</span><!--
    --><span v-if="twelveHour" class="clock__ampm">{{ amPm }}</span>
  </time>
</template>

<script>
function padZero(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

function getDate() {
  return new Date();
}

function getSeconds() {
  return padZero(getDate().getSeconds());
}

function getMinutes() {
  return padZero(getDate().getMinutes());
}

function getHour(twelveHour) {
  let hours = getDate().getHours();
  if (twelveHour && hours > 12) {
    hours = hours - 12;
  }
  return padZero(hours);
}

function getAmPm() {
  return (getDate().getHours() > 12) ? 'pm' : 'am';
}

module.exports = {
  name: 'clock',

  props: ['blink', 'displaySeconds', 'twelveHour'],

  data: function data() {
    return {
      ticker: null,
      minutes: getMinutes(),
      hours: getHour(this.twelveHour),
      seconds: getSeconds(),
      amPm: getAmPm(),
    };
  },

  created: function created() {
    var _this = this;

    this.ticker = setInterval(function ticker() {
      _this.minutes = getMinutes();
      _this.hours = getHour(_this.twelveHour);
      _this.seconds = getSeconds();
    }, 1000);
  },

  destroyed: function destroyed() {
    clearInterval(this.ticker);
  },

};
</script>
