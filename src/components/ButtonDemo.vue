<template>
  <div>Button实例</div>
  <h1>示例1</h1>
  <div>
    <Button>确认</Button>
    <Button theme="button">确认</Button>
    <Button theme="link">跳转</Button>
    <Button theme="text">文字按钮</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  setup() {
    const onClick = () => {
      console.log("你好");
    };
    return { onClick };
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>