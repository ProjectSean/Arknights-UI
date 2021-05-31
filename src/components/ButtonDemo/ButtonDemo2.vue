<demo>常规用法</demo>
<template>
  <div>
    <Button size="big">大按钮</Button><br />
    <br />
    <Button theme="link">普通按钮</Button> <br />
    <br />
    <Button theme="danger" size="small">小按钮</Button><br />
    <br />
    <Button theme="text" size="small">小按钮</Button>
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