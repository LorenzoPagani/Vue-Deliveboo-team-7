<script>
export default {
  name: "MyHeader",
  data() {
    return {
      menuItems: [
        {
          routeName: "home",
          label: "Homepage",
        },
        {
          routeName: "about",
          label: "About us",
        },
        {
          routeName: "contacts",
          label: "Contacts",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex align-items-center justify-content-around">
        <a class="navbar-brand" href="#"><b>Logo</b></a>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-between w-30">
            
            <div class="nav-item px-4 mx-4 " v-for="(item, index) in menuItems" :key="index">
              <router-link :to="{ name: item.routeName }" class="nav-link p-3">
                {{ item.label }}
              </router-link>
            </div>
          </div>

          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
         
        </div>
        <div>
          <a class="btn btn-primary" href="http://127.0.0.1:8000/">Accedi all'area ristoratori</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #feb836;
}

.link{
    text-decoration: none;
    color: black;
}
</style>
