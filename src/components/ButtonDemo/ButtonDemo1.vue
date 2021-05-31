<demo>常规用法</demo>
<template>
  <Button>确认</Button>
  <Button theme="link">跳转</Button>
  <Button theme="text">文字按钮</Button><br />
  <br />
  <Button theme="danger">确认</Button>
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
