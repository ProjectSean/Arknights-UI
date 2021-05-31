<template>
  <h1>Button示例</h1>
  <Demo :component="ButtonDemo1" title="常规用法" />
  <Demo :component="ButtonDemo2" title="大中小按钮" />
  <Demo :component="ButtonDemo3" title="禁用按钮" />
  <Demo :component="ButtonDemo4" title="加载中按钮" />
</template>

<script>
import ButtonDemo1 from "./ButtonDemo/ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo/ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo/ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo/ButtonDemo4.vue";
import Demo from "./Demo.vue";
export default {
  setup() {
    return { ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4 };
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