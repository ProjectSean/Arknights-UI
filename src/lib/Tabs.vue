<template>
  <div>
    <div v-for="t in titles" :key="t.id">{{ t }}</div>
    <component v-for="c in defaults" :is="c" :key="c.id" />
  </div>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { titles, defaults };
  },
  components: {
    Tab,
  },
};
</script>

<style lang="scss" scoped>
</style>