<template>
  <div class="ark-mb-overlay"></div>
  <div class="ark-mb-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>