<demo>常规用法</demo>
<template>
  <div>
    <Button disabled>主要按钮</Button>
    <Button theme="link" disabled>未开放</Button> <br />
    <br />
    <Button theme="text" disabled>NO INFO</Button>
    <Button theme="danger" disabled>普通按钮</Button>
  </div>
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>