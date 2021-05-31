<template>
  <h1>Tabs实例</h1>
  <Demo :component="TabsDemo1" title="常规用法" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabsDemo1 from "./TabsDemo/TabsDemo1.vue";
export default {
  setup() {
    return { TabsDemo1 };
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