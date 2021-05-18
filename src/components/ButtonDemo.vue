<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button>确认</Button>
    <Button theme="link">跳转</Button>
    <Button theme="text">文字按钮</Button> <br />
    <br />
    <Button theme="danger">确认</Button>
  </div>
  <br />
  <h1>示例2</h1>
  <div>
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
  </div>
  <h1>示例3</h1>
  <div>
    <Button disabled>主要按钮</Button>
    <Button theme="link" disabled>未开放</Button>
    <Button theme="text" disabled>NO INFO</Button> <br />
    <br />
    <Button theme="danger" disabled>普通按钮</Button>
  </div>
  <br />
  <h1>示例4</h1>
  <div>
    <Button theme="link" size="big" loading>等待中</Button>
    <Button theme="text" loading>加载中</Button>
    <Button size="small" loading>加载中</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  setup() {
    const onClick = () => {
      console.log("你好");
    };
    return { onClick };
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>