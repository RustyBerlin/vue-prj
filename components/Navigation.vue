<template>
  <nav>
      <ul>
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
    .active {
        font-weight: bold;
    }

</style>

