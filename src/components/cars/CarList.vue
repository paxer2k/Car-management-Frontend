<template>
  <section>
    <div class="container">
      <div class="add-content">
        <h5>Add a car to the list</h5>
        <button
          v-if="this.$store.getters.isAuthenticated"
          type="button"
          class="btn btn-success bi bi-plus mt-3 col-3"
          @click="this.$router.push('/addcar')"
        >
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

      <div class="pagination-content">
        <h5>Next or Previous 3 cars</h5>
        <button class="btn btn-danger m-1" @click="previous(this.limit)">
          Previous
        </button>
        <button class="btn btn-success m-1" @click="next(this.limit)">
          Next
        </button>
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
      offset: 0,
      limit: 3,
    };
  },
  mounted() {
    this.getCars();
  },
  methods: {
    getCars() {
      switch (this.$route.path) {
        case "/cars":
          axios
            .get("/cars?offset=" + this.offset + "&limit=" + this.limit)
            .then((result) => {
              this.cars = result.data;
              if (this.cars.length == 0) {
                this.previous(this.limit);
                this.getCars();
                return;
              }
            })
            .catch((error) => console.log(error));
          break;

        case "/mycars":
          axios
            .get(
              "/cars/users/" +
                localStorage.getItem("id") +
                "?offset=" +
                this.offset +
                "&limit=" +
                this.limit
            )
            .then((result) => {
              this.cars = result.data;
              if (this.cars.length == 0) {
                this.previous(this.limit);
                this.getCars();
                return;
              }
            })
            .catch((error) => console.log(error));
      }
    },
    next(increment) {
      this.offset += increment;
      this.getCars();
    },
    previous(decrement) {
      if (this.offset - decrement >= 0) {
        this.offset -= decrement;
        this.getCars();
      }
    },
  },
};
</script>

<style>
.add-content {
  text-align: center;
}

.pagination-content {
  text-align: center;
}

.bi {
  font-size: 30px;
}
</style>