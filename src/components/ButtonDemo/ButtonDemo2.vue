<demo>常规用法</demo>
<template>
  <div>
    <Button size="big">大按钮</Button>
    <Button>普通按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="link" size="big">大按钮</Button>
    <Button theme="link">普通按钮</Button>
    <Button theme="link" size="small">小按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="text" size="big">大按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button theme="text" size="small">小按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="danger" size="big">大按钮</Button>
    <Button theme="danger">普通按钮</Button>
    <Button theme="danger" size="small">小按钮</Button>
  </div>
  <br />
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>