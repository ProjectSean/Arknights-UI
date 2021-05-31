<demo>常规用法</demo>
<template>
  <div>
    <Button theme="link" size="big" loading>等待中</Button>

    <Button theme="text" loading>加载中</Button><br />
    <br />
    <Button theme="danger" loading>加载中</Button>
    <Button size="small" loading>加载中</Button>
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