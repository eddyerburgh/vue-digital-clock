<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <button id="change-message" @click="changeMessage">Change message</button>
	  <p>{{ msg2 }}</p>
	  <bar />
  </div>
</template>

<script>
import Bar from './Bar';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  props: ['msg2'],
  methods: {
    changeMessage() {
      this.msg = 'new message';
    },
  },
  components: {
    Bar,
  },
};
</script>
