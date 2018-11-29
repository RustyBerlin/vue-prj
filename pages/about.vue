<template>
    <section>
      <Navigation/>
      <Headline headline='About Me' />
      <Footer/>
    </section>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Headline from '~/components/Headline.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Headline,
    Footer

  }
}



</script>

<style>

</style>

