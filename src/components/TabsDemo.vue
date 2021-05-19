<template>
  <div>Tabs实例</div>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Tab,
    Tabs,
  },
};
</script>

<style lang="scss" scoped>
</style>