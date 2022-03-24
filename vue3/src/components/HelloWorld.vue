<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><a href="https://kr.tradingview.com/lightweight-charts">🏠 Homepage</a></p>
    <p><a href="https://github.com/tradingview/lightweight-charts">🏬 Github</a></p>
    <p><a href="https://tradingview.github.io/lightweight-charts/">📚 Documentation</a></p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
