
<template>
  <nav class="navbar navbar-dark bg-dark py-2 navbar-expand-md">
    <a href="/" class="position-absolute text-decoration-none" style="margin-left: 20px;">
      <!-- logo from icons-icons.com -->
      <img src="../assets/carimg.png" height="30" />
    </a>
    <div class="container">
      <div
        class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <!-- Add a router link to the homepage (don't use the a tag!) -->
            <a
              v-if="isLoggedIn()"
              to="/profile"
              style="text-align: center;"
              class="nav-link "
              active-class="active"
            >
              Welcome {{ this.getUsername() }}</a
            >
          </li>

          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="text-info">Home</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn() && getRole() == 'Admin'">
            <router-link to="/cars" class="nav-link" active-class="text-info">All cars</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn()">
            <router-link to="/mycars" class="nav-link" active-class="text-info">My cars</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn()">
            <router-link to="/addcar" class="nav-link" active-class="text-info" >Add car</router-link>
          </li>
        </ul>
      </div>

      <!-- Navbar items right -->
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ms-auto">
          <!-- when logged in, show logout butten and when not logged, show login -->
          <li class="nav-item">
            <a v-if="isLoggedIn()" class="nav-link btn btn-outline-primary col-12 mb-1" style="color: white;" @click="this.logout()"
              >Logout</a
            >
            <router-link v-else to="/login" class="nav-link btn btn-primary col-12 mb-1" style="color: white;">Login</router-link>
            <!-- <router-link v-else to="/login" class="nav-link">login</router-link> -->
          </li>
        </ul>
      </div>
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

<style>

</style>