<template>
  <footer class="container-fluid text-center text-lg-start text-white">
    <div class="container p-4 pb-0">
      <div class="row">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-info text-uppercase mb-4 font-weight-bold">
            About this website
          </h6>
          <p>
            This is a simple website for storing and managing your cars. 
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-info text-uppercase mb-4 font-weight-bold">
            Contact
          </h6>
          <p>
            <i class="text-info fas fa-home mr-3"></i> Hoofddorp, Noord-Holland, Netherlands
          </p>
          <p>
            <i class="text-info fas fa-envelope mr-3"></i>
            647833@student.inholland.nl
          </p>
        </div>
      </div>
    </div>

    <div class="text-center py-3 mt-3 bg-dark">
      Alexander Arkhipov © 2022 Copyright:
      <a class="text-info" href="https://github.com/paxer2k" target="_blank"
        >A. Arkhipov @ GitHub</a
      >
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style>
footer {
  background-color: #333;
  position: absolute;
  bottom: 0;
}
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
</style>