<template>
  <section>
    <div class="container">
      <div>
        <h2>Welcome to Alex's car management system</h2>
        <h5 class="text-danger" v-if="!this.$store.getters.isAuthenticated">Login now to manage your own cars today!</h5>
        <img src="../assets/homepagepicture.jpg" height="400" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>
  
<style scoped>
.container {
  text-align: center;
}

@media (min-width: 800px) {
  img {
    height: 400px;
  }
}

@media (max-width: 800px) {
  img {
    height: 250px;
  }
}
</style>