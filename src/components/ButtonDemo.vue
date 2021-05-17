<template>
  <div>Button实例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" @focus="onFocus" @mousemove="onMouseOver"
      >你好</Button
    >
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