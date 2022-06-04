<template>
  <navigation v-if="this.$route.path != '/login'"/>
  <router-view class="footer-app" />
  <Footer  v-if="this.$route.path != '/login'" class="bottom-0"/>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  // if the application gets open, then this action store will get executed
  created() {
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style>

.footer-app {
  margin-top: 4rem;
	margin-bottom: 6rem;
	min-height: 55.5vh;
}
</style>
