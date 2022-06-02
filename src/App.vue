<template>
  <navigation class="fixed-top"/>
  <router-view />
  <Footer  class="fixed-bottom"/>
  <!-- Add a router view -->
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  // if the application gets open, then this action store will get executed
  created() {
    this.$store.dispatch('autoLogin');
  }
};
</script>

<style>

</style>
