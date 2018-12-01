<template>
  <nav>
    <ul class="module">
        <li v-bind:class="classObject('/')">
            <router-link to="/">Home</router-link>
        </li>
        <li v-bind:class="classObject('/about')">
            <router-link to="/about">About</router-link>
        </li>
        <li v-bind:class="classObject('/contact')">
            <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  computed: {
      slug () {
          return this.$route.path
      },
  },

  methods: {
      classObject (slug) {
          return slug == this.$route.path ? 'active' : ''
      }
  }
}
</script>

<style>
  nav {
    background: lightgray;
    padding-right: 15px;
  }

  nav ul {
    padding: 0;
  }

  nav .active a {
    background: black;
  }

  nav li {
    display: inline-block;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-size: 130%;
    padding: 5px 15px;
    background: darkgrey;
    display: inline-block;
    margin-right: -1em;
    margin-left: 17px;
  }

  nav li:first-child a {
    margin-left: 1px;
  }

  nav a:hover {
    background: black;
  }
</style>
