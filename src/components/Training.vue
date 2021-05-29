<template>
  <article class="markdown-body">
    <h1>安装</h1>
    <p>打开终端运行下列命令：</p>
    <pre><code>npm install ark-ui</code></pre>
    <p>或</p>
    <pre><code>yarn add ark-ui</code></pre>

    <p>下一节：<a href="#/home/start">开始使用</a></p>
  </article>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
article {
  color: #fff;
  & h1 {
    font-size: 40px;
  }
  & p {
    font-size: 20px;
    & a {
      color: skyblue;
      &:hover {
        text-decoration: none;
      }
    }
  }
  & pre code {
    font-size: 20px;
    color: black;
  }
}
</style>