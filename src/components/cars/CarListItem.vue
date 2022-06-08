<template>
  <div class="col-lg-4 p-4 mt-5">
    <div class="card car-card h-100">
      <div class="card-body row">
          <div class="car align-items-center p-2 text-center">
            <img
              :src="car.image"
              :alt="car.brand"
              :title="car.brand"
              style="height: 100px"
              class="rounded"
            />
            <h5 class="mt-2 car-text fw-bold">{{ car.brand }} {{ car.model }}</h5>

            <div class="mt-2 info">
              <small class="car-text fw-bold">{{ car.category.name }}</small>
              <span class="regNo d-block">RegNo. {{ car.registrationNumber }}</span>
              <span class="carYear d-block">{{ car.year }}</span>
            </div>

            <div class="price mt-2 dark">
              <div class="price mt-2 align-items-center">
                <span class="text1 d-block">€{{ car.price }}</span>
              </div>
            </div>
          </div>
          <div class="car-footer card-footer" v-if="this.$store.getters.isAdmin">
            <button
              @click="updateCar(car.id)"
              class="btn btn-sm btn-warning col-12 m-1"
            >
              <i class="fas fa-pen-to-square"></i>
            </button>
            <button
              @click="deleteCar(car.id)"
              class="btn btn-sm btn-danger col-12 m-1"
            >
              <i class="fas fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "CarListItem",
  props: {
    car: Object,
  },
  methods: {
    deleteCar(id) {
      axios
      if (confirm("Are you sure you want to delete this car?")) {
        axios
        .delete("/cars/" + id)
        .then((result) => {
          console.log(result);
          this.$emit("update");
        })
        .catch((error) => console.log(error));
      }
    },
    updateCar(id) {
      this.$router.push("/updateCar/" + id);
    },
  },
};
</script>

<style>

</style>