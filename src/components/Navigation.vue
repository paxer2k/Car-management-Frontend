<template>
  <nav class="navbar navbar-dark bg-dark py-2 navbar-expand-md">
    <a
      href="/"
      class="position-absolute text-decoration-none"
      style="margin-left: 20px"
    >
      <img src="../assets/carimg.png" height="30" />
    </a>
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="text-info">Home</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn() && getRole() == 'Admin'">
          <router-link to="/cars" class="nav-link" active-class="text-info">All cars</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn()">
          <router-link to="/mycars" class="nav-link" active-class="text-info">My cars</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link v-if="isLoggedIn()" to="/addcar" class="text-secondary fas fa-car text-decoration-none" active-class="text-info"> Add</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <!-- when logged in, show logout butten and when not logged, show login -->
        <li class="nav-item">
          <a
            v-if="isLoggedIn()"
            class="btn btn-outline-primary col-12 mb-1"
            style="color: white"
            @click="this.logout()"
            >Logout</a
          >
          <router-link
            v-else
            to="/login"
            class="btn btn-primary col-12 mb-1"
            style="color: white"
            >Login</router-link
          >
          <!-- <router-link v-else to="/login" class="nav-link">login</router-link> -->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    isLoggedIn() {
      return this.$store.state.token;
    },
    getRole() {
      return this.$store.state.role;
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => console.log(error));
    },
    getUsername() {
      return this.$store.state.username;
    },
  },
};
</script>

<style scoped>
@media (min-width: 800px) {
	img {
		display: block;
	}
}

@media (max-width: 800px) {
	img {
		display: none;
	}
}
</style>