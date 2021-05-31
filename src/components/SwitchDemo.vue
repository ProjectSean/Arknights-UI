<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1" title="常规用法" />
    <Demo :component="SwitchDemo2" title="支持disabled" />
  </div>
</template>
<script lang="ts">
import SwitchDemo1 from "./SwitchDemo/SwitchDemo1.vue";
import SwitchDemo2 from "./SwitchDemo/SwitchDemo2.vue";
import Demo from "./Demo.vue";
export default {
  setup() {
    return { SwitchDemo1, SwitchDemo2 };
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