<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:value="switchValue" />
      </div>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-mode:value="bool"&gt;</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
export default {
  setup() {
    const switchValue = ref(true);
    return { switchValue };
  },
  components: {
    Switch,
    Button,
  },
};
</script>

<style lang="scss" scoped>
h1,
.demo {
  color: #fff;
}
</style>