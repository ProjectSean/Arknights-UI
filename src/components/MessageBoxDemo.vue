<template>
  <h1>MessageBox示例</h1>
  <Demo :component="MessageBoxDemo1" title="按钮切换" />
  <Demo :component="MessageBoxDemo2" title="一句话调用" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import MessageBoxDemo1 from "./MessageBoxDemo/MessageBoxDemo1.vue";
import MessageBoxDemo2 from "./MessageBoxDemo/MessageBoxDemo2.vue";
export default {
  setup() {
    return { MessageBoxDemo1, MessageBoxDemo2 };
  },
  components: {
    Demo,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
}
</style>