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
// h1,
// .demo {
//   color: #fff;
// }
$border-color: #d9d9d9;
h1 {
  color: #fff;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  color: #fff;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      color: #fff;
    }
  }
}
</style>