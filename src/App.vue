<template>
  <div id="app">
    <foo :msg2="msg2" />
  </div>
</template>

<script>
import Foo from './components/Foo';

export default {
  name: 'app',
  data() {
    return {
      msg2: 'message passed by props',
    };
  },
  components: {
    Foo,
  },
};
</script>
