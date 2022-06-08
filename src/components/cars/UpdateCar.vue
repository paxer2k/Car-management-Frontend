<template>
  <section>
    <div class="container col-lg-5">
        <h2 class="mt-3 mt-lg-5" style="text-align:center;">Edit a car</h2>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
      <form ref="form">
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Registration Number</span>
          <input
            type="number"
            class="form-control"
            v-model="car.registrationNumber"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Brand</span>
          <input type="text" class="form-control" v-model="car.brand" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Model</span>
          <input type="text" class="form-control" v-model="car.model" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Year</span>
          <input type="text" class="form-control" v-model="car.year" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Price</span>
          <input type="number" class="form-control" v-model="car.price" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Image URL</span>
          <input type="text" class="form-control" v-model="car.image" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Category</span>
          <select class="form-select" v-model="car.categoryId">
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary col-12 m-1" @click="this.updateCar()">Update</button>
          <button
            style="text-align: center;"
            type="button"
            class="btn btn-danger col-12 m-1"
            @click="this.$router.push('/cars')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "UpdateCar",
  props: {
    id: Number
  },
  data() {
    return {
      car: {
        userId: localStorage.getItem('id'),
        registrationNumber: "",
        brand: "",
        model: "",
        year: 0,
        price: 0,
        image: "",
        categoryId: 0
      },
      errorMessage: "",
      categories: [],
    };
  },
  mounted() {
    axios
      .get("/cars/" + this.id)
      .then((result) => {
        this.car = result.data;
      })
      .catch((error) => console.log(error));

    axios
      .get("/categories/")
      .then((result) => {
        this.categories = result.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    updateCar() {
      axios
        .put("/cars/" + this.id, this.car)
        .then((result) => {
          console.log(result);
          this.$router.push("/cars");
        })
        .catch((error) => {
          this.errorMessage = error.response.data.errorMessage;
          console.log(error)
        });
    },
  },
};
</script>

<style scoped>
  @media (min-width: 800px) {
	button {
		align-items: center;
	}
}
</style>