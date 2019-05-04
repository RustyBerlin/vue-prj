<template>
  <header id="top">
    <Hero/>
    <Navigation/>
  </header>
</template>

<script>
  import Hero from './Hero.vue'
  import Navigation from './Navigation.vue'

  export default {
    components: {
      Hero,
      Navigation,
    }
  }  
</script>
