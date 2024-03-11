<script>
export default {
  name: "AppOwners",
};
</script>

<template>
  <div class="container cardcontainer">
    <div class="row">
      <div class="col-md-8 w-100 mt-4 d-flex justify-content-center">
        <div class="card bgcard">
          <div class="card-body">
            <h2 class="card-title text-center ">Vuoi registrare il tuo ristorante?</h2>
            <p class="card-text mt-4 ">
              Sei un ristoratore e vuoi mostrare i tuoi piatti sulla nostra app? Crea un account gratuito ed entra a far
              parte di Deliveboo!
            </p>
            <div class="d-flex justify-content-center">
              <a href="http://127.0.0.1:8000/" class="card-link button-87">Clicca qui!</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* h1 {
  color: black;
}

p {
  color: black;
} */
.row {
  margin-top: 150px;
}

.bgcard {
  background: linear-gradient(90deg, rgb(186 138 69 / 88%) 0%, rgb(234 152 55) 100%);
  color: white;
}

.button-87 {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  text-decoration: none;
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}
</style>
