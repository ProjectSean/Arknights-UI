<template>
  <h1>MessageBox示例</h1>

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
  <h1>MessageBox示例2</h1>
  <Button @click="showMessageBox">展示MessageBox</Button>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import MessageBox from "../lib/MessageBox.vue";
import { openMessageBox } from "../lib/openMessage";
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
    const showMessageBox = () => {
      openMessageBox({
        title: "标题",
        content: "你好",
        closeOnClickOverlay: true,
        ok() {},
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { x, toggle, f1, f2, showMessageBox };
  },
  components: {
    MessageBox,
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>