<template>
  <section>
    <div class="container">
      <div class="content" style="text-align: center;">
      <h2 class="mt-3 mt-lg-5">List of all cars</h2>
      <h5 class="mt-lg-3" v-if="!isLoggedIn()">Login to add your own car to the system!</h5>
      <button
        v-if="isLoggedIn()" 
        type="button"
        class="btn btn-primary mt-3"
        @click="this.$router.push('/addcar')"
      >
        Add car
      </button>
      </div>
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
      axios.get("/cars").then((result) => {
        this.cars = result.data;
      });
    },
    isLoggedIn() {
      return this.$store.state.token;
    },
  },
};
</script>

<style>
</style>