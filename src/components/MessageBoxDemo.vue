<template>
  <h1>MessageBox示例</h1>
  <Button @click="toggle">切换</Button>
  <MessageBox :visible="x" />
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import MessageBox from "../lib/MessageBox.vue";
export default {
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    return { x, toggle };
  },
  components: {
    MessageBox,
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>