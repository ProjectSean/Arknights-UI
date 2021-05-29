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
  & h1,
  p,
  a {
    color: #fff;
  }
  & pre code {
    user-select: auto;
  }
}
</style>