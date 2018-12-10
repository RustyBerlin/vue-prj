<template>
  <header id="top">
    <Hero/>
    <Navigation/>
  </header>
</template>

<script>
  import Hero from '~/components/Hero.vue'
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Hero,
      Navigation

    }
  }  
</script>
