<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <img :src="car.image" :alt="car.brand" :title="car.brand"/>
        <p class="carRegistrationNumber">RegNo. {{ car.registrationNumber }}</p>
        <br>
        <div class="float-start">
          <p>{{ car.brand }} {{ car.model }}</p>
          <p>
            <small>{{ car.category.name }}</small>
          </p>
          <p>{{ car.year }}</p>
        </div>
        <span class="price float-end">€{{ car.price }}</span>
      </div>
      <div class="card-footer">
        <button class="btn btn-warning" @click="updateCar(car.id)">Edit</button
        >&nbsp;&nbsp;
        <button
          class="btn btn-danger"
          style="float: right"
          @click="deleteCar(car.id)"
        >
          Delete
        </button>
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
        .delete("/cars/" + id)
        .then((result) => {
          console.log(result);
          this.$emit("update");
        })
        .catch((error) => console.log(error));
      // use axios to delete the product
    },
    updateCar(id) {
      // use the router to navigate to the editproduct route and pass the id
      this.$router.push("/updateCar/" + id);
    },
  },
};
</script>

<style>
.carRegistrationNumber {
  text-align: center;
  font-weight: bold;
}
</style>