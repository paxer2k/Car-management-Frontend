<template>
  <section>
    <div class="container">
      <h2 class="mt-5 mt-lg-5" style="text-align: center;">{{ this.getUsername() }}'s Cars:</h2>
      <div class="row mt-3">
        <car-list />
      </div>
    </div>
  </section>
</template>

<script>
import CarList from "./CarList.vue";
export default {
  name: "MyCarList",
  components: {
    CarList,
  },
  methods: {
    getUsername() {
      return localStorage.getItem("username");
    },
  },
};
</script>

<style>

</style>