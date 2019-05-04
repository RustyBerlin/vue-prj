<template>
  <div class="hero" v-bind:style="{ backgroundImage: 'url(' + hero.image + ')' }">
    <router-link to="/">
      {{ hero.title }}
    </router-link>
  </div>
</template>

<script>
import config from '../config.json';

export default {
  data() {
    return {
      hero: config.hero,
    };
  },
};
</script>
