<script>
export default {
  name: "Jumbo",
};
</script>
<template>
  <div class="container-fluid jumbobg position-relative">
    <div
      class="row d-flex justify-content-center position-absolute top-50 start-50 translate-middle"
    >
      <div class="col-12">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  </div>
</template>
<style scoped>
.jumbobg {
  background-image: url("https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg");
  background-size: cover;
  height: 500px;
}
</style>
