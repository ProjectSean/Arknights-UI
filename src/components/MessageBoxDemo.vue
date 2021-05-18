<template>
  <h1>MessageBox示例</h1>
  <Button @click="toggle">切换</Button>
  <MessageBox
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  />
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
    const f1 = () => {
      return false;
    };
    const f2 = () => {
      return true;
    };
    return { x, toggle, f1, f2 };
  },
  components: {
    MessageBox,
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>