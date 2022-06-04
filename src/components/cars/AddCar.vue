<template>
  <div class="container">
    <h2 class="mt-3" style="text-align:center;">Add a car:</h2>
  </div>

  <!-- container for add form -->
  <div class="container mt-3 col-lg-5">
    <div class="row">
      <div class="col-md-12 mb-4 mb-lg-2">
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <form>
          <!-- labels and input fields -->
          <div
            class="input-group mb-3"
            v-if="isLoggedIn() && getRole() == 'Admin'"
          >
            <span class="input-group-text">UserId</span>
            <input
              type="number"
              class="form-control"
              id="carRegistrationNumber"
              placeholder="Enter a userId..."
              v-model="car.userId"
              required
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Registration Number</span>
            <input
              type="text"
              class="form-control"
              id="carRegistrationNumber"
              placeholder="Enter a registration number..."
              v-model="car.registrationNumber"
              required
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Brand</span>
            <input
              type="text"
              class="form-control"
              id="carBrand"
              placeholder="Enter car brand..."
              v-model="car.brand"
              required
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Model</span>
            <input
              type="text"
              class="form-control"
              id="carModel"
              placeholder="Enter car model..."
              v-model="car.model"
              required
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Year</span>
            <input
              type="number"
              class="form-control"
              id="carYear"
              placeholder="Enter car year..."
              v-model="car.year"
              required
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Price</span>
            <input
              type="number"
              class="form-control"
              id="carPrice"
              placeholder="Enter car price..."
              v-model="car.price"
              required
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Category</span>
            <select
              class="form-control"
              id="carCategory"
              v-model="car.categoryId"
              required
            >
              <option
                v-for="category in categories"
                :key="category.id"
                v-bind:value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Image URL</span>
            <input
              type="text"
              class="form-control"
              id="carImage"
              placeholder="Enter image url..."
              v-model="car.image"
              required
            />
          </div>

          <!-- Cancel button -->
          <div class="mt-2 padding">
            <button
              type="button"
              class="btn btn-success col-6"
              @click="this.addCar()"
            >
              Add
            </button>

            <button
              type="button"
              class="btn btn-danger col-6"
              @click="this.$router.push('/mycars')"
            >
              Cancel
            </button>

            <!-- Submit button -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "AddCar",
  data() {
    return {
      car: {
        userId: localStorage.getItem("id"),
        registrationNumber: "",
        brand: "",
        model: "",
        year: 0,
        price: 0,
        image: "",
        categoryId: 0,
      },
      errorMessage: "",

      categories: [],
    };
  },
  mounted() {
    axios
      .get("/categories")
      .then((result) => {
        console.log(result);
        this.categories = result.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    addCar() {
      axios
        .post("/cars", this.car)
        .then((result) => {
          this.car.categoryId = result.data["categoryId"];
          console.log(result);
          this.$router.push("/cars");
        })
        .catch((error) => {
          this.errorMessage = error;
          console.log(error);
        });
    },
    isLoggedIn() {
      return this.$store.state.token;
    },
    getRole() {
      return this.$store.state.role;
    },
  },
};
</script>

<style scoped>
</style>