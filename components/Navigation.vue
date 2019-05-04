<template>
  <nav>
      <div class="ham" v-on:click="navOpenClose()"></div>
      <ul class="module" v-bind:class="this.isNavOpen ? '' : 'hide'">
        <li v-for="item in items" v-bind:key="item.id" v-bind:class="classObject(item.slug)">
          <router-link v-bind:to="item.slug">{{ item.title }}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
import config from '../config.json';

export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkNav);
      this.checkNav();
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkNav);
  },

  data() {
    return {
      items: config.navig,
      breakpointMobile: config.breakpointMobile,
      isNavOpen: true,
    };
  },

  methods: {
    classObject(slug) {
      return slug === this.$route.path ? 'active' : '';
    },

    navOpenClose() {
      if (this.isNavOpen === false) {
        this.isNavOpen = true;
      } else {
        this.isNavOpen = false;
      }
    },

    checkNav() {
      this.isNavOpen = false;
      if (window.innerWidth > this.breakpointMobile) {
        this.isNavOpen = true;
      }
    },

  },
};
</script>
