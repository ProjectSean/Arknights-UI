<template>
  <div :size="size">
    <!-- 让这个元素继承 -->
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  // 不要让外层元素继承方法
  inheritAttrs: false,
  setup(props, context) {
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>