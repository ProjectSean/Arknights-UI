<demo>常规用法</demo>
<template>
  <Button @click="showMessageBox">展示MessageBox</Button>
</template>
<script>
import Button from "../../lib/Button.vue";
import { openMessageBox } from "../../lib/openMessage";
export default {
  setup() {
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
    return { showMessageBox };
  },
  components: {
    Button,
  },
};
</script>
