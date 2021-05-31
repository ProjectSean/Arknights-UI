<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
      <p>*请将引入路径修改成您自己指定的路径</p>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    title: String,
    component: Object,
  },
  components: { Button },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);
    return { Prism, html, codeVisible };
  },
};
</script>

<style lang="scss" scoped>
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
    > p {
      margin-top: 5px;
      font-style: italic;
      font-size: 14px;
    }
  }
}
</style>