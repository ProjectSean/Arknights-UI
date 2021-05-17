<template>
  <div>Button实例</div>
  <h1>示例1</h1>
  <div>
    <Button>确认</Button>
    <Button theme="button">确认</Button>
    <Button theme="link">跳转</Button>
    <Button theme="text">文字按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <div>
      <Button size="big">大按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小按钮</Button> <br />
    </div>
    <div>
      <Button theme="link" size="big">大按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button theme="link" size="small">小按钮</Button> <br />
    </div>
    <div>
      <Button theme="text" size="big">大按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button theme="text" size="small">小按钮</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button> <br />
    </div>
    <div>
      <Button theme="link" level="main">主要按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button theme="link" level="danger">危险按钮</Button> <br />
    </div>
    <div>
      <Button theme="text" level="main">主要按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button theme="text" level="danger">危险按钮</Button> <br />
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <Button loading>加载中</Button>
    <Button theme="link" size="big" loading>加载中</Button>
    <Button theme="text" size="small" loading>加载中</Button>
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