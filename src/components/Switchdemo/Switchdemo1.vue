<demo>常规用法</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../../lib/Switch.vue";
export default {
  setup() {
    const bool = ref(true);
    return { bool };
  },
  components: {
    Switch,
  },
};
</script>
