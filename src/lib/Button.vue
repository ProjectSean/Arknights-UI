<template>
  <button class="an-button" :class="`theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>