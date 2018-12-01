<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: green;
}

header, footer, main {
  text-align:center;
}

footer, main {
  padding: 15px;
}

footer {
  background: lightgrey;
}

h1 {
  padding-bottom: 15px;
}

main section {
  padding-bottom: 30px;
}

main section:last-child {
  padding-bottom: 15px;
}

.module {
  text-align: left;
  max-width: 1200px;
  margin: auto;
}
</style>
