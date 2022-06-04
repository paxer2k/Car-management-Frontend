<template scoped>
  <section>
    <div class="container">
      <div class="row mt-3">
        <car-list-item
          v-for="car in cars"
          :key="car.id"
          :car="car"
          @update="getCars"
        />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
import CarListItem from "./CarListItem.vue";

export default {
  name: "CarList",
  components: {
    CarListItem,
  },
  data() {
    return {
      cars: [],
    };
  },
  mounted() {
    this.getCars();
  },
  methods: {
    getCars() {

      if (this.$route.path == "/cars") {
              axios.get("/cars").then((result) => {
              this.cars = result.data;
        })
        .catch((error) => console.log(error));
      }
      else if (this.$route.path == "/mycars") {
        axios
        .get("/cars/users/" + localStorage.getItem("id"))
        .then((result) => {
          this.cars = result.data;
        })
        .catch((error) => console.log(error));
      }

    },
    isLoggedIn() {
      return this.$store.state.token;
    },
  },
};
</script>

<style scoped>
</style>