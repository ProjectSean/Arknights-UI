<template>
  <Switch v-model:value="switchValue" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  setup() {
    const switchValue = ref(true);
    return { switchValue };
  },
  components: {
    Switch,
  },
};
</script>

<style lang="scss" scoped>
</style>