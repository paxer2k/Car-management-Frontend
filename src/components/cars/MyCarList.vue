<template>
  <section>
    <div class="container">
      <h2 class="mb-4" style="text-align: center;">{{ this.getUsername() }}'s cars:</h2>
        <car-list class="row"/>
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

<style scoped>

</style>