<template>
  <h1>MessageBox示例</h1>
  <div style="position: relative; z-index: 1">
    <Button @click="toggle">切换</Button>
    <MessageBox
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <div>我是第一</div>
        <div>我是第二</div>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </MessageBox>
  </div>
  <div
    style="
      position: relative;
      z-index: 2;
      width: 300px;
      height: 300px;
      background: red;
    "
  ></div>
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