<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">{{ this.getUsername() }}'s Cars:</h2>
      <div class="row mt-3">
        <car-list-item
          v-for="car in cars"
          :key="car.id"
          :car="car"
          @update="getCarsByUserId"
        />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
import CarListItem from "./CarListItem.vue";
export default {
  name: "MyCarList",
  components: {
    CarListItem,
  },
  data() {
    return {
      cars: [],
    };
  },
  mounted() {
    this.getCarsByUserId();
  },
  methods: {
    getUsername() {
      return localStorage.getItem("username");
    },
    getCarsByUserId() {
      axios
        .get("/cars/users/" + localStorage.getItem("id"))
        .then((result) => {
          this.cars = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>

</style>