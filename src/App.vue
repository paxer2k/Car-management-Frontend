<template>
  <navigation />
  <div class="container page">
      <router-view />
      <Footer  />
  </div>
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
.page {
  margin-top: 4rem;
	margin-bottom: 6rem;
	min-height: 55.5vh;
}

</style>
