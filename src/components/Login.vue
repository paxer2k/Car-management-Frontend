<template>
  <section class="container mt-5 p-5 col-10 col-md-6 col-lg-4 col-xl-3" id="main">
    <div class="container">
          <div v-if="errorMessage" class="alert alert-danger" style="text-align: center;" role="alert">
            {{ errorMessage }}
          </div>
          <form class="mt-5">
            <h1 class="h3 mb-3 font-weight-normal" style="text-align: center; ">Please sign in</h1>
            <div class="login-icon">
            <i class="bi bi-person"></i>
            </div>
            <div class="mt-4">
              <label for="inputUsername" class="form-label">Username</label>
              <input
                id="inputUsername"
                type="text"
                class="form-control"
                v-model="username"
                placeholder="Enter your username..."
              />
            </div>
            <div class="mt-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
                placeholder="Enter your password..."
              />
            </div>
            <button type="button" @click="login()" class="btn btn-primary col-12 mt-4">
              Sign in
            </button>
            <button type="button" @click="cancel()" class="btn btn-danger col-12 mt-3">
              Cancel
            </button>
          </form>
    </div>
  </section>
</template>
 
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    // this is part is synchrone, which means it will be executed later than any other code outside the store
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.replace("/mycars");
        })
        .catch((error) => {
          this.errorMessage = error.response.data;
          console.log(error);
        });
    },
    cancel() {
      this.$router.push("/");
    }
  },
};
</script>
 
<style scope>
  #main {
    background-color: rgb(255, 255, 255);
    border-radius: 6%;
    box-shadow: 1px 5px 20px 15px #888888;
  }

  .login-icon {
    font-size: 100px;
    text-align: center;
    color: #0275d8;
  }
</style>