<template>
  <nav>
      <ul class="module">
        <li v-for="item in items" v-bind:key="item.id" v-bind:class="classObject(item.slug)">
          <router-link v-bind:to="item.slug">{{ item.title }}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
  import config from '../config.json'

  export default {
    data() {
      return {
        items: config.navig,
      }
    },

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
    margin-left: 22px;
  }

  nav li:first-child a {
    margin-left: 1px;
  }

  nav a:hover {
    background: black;
  }
</style>
