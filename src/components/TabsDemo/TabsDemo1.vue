<demo>Tabs</demo>
<template>
  <div>
    <Tabs v-model:selected="selectedTab">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2导航导航导航导航">内容2</Tab>
      <Tab title="导航栏3">内容3</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  setup() {
    const selectedTab = ref("导航1");
    return { selectedTab };
  },
  components: {
    Tab,
    Tabs,
  },
};
</script>
