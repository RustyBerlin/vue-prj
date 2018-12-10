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
