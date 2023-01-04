<template>
  <header>
    <div class="headercontainer">
      <nav class="navbar navbar-expand-lg">
        <b-navbar-brand
          ><RouterLink to="/" class="nav-link"
            >Johannas bokhylla</RouterLink
          ></b-navbar-brand
        >

        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Start</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/bokhylla" class="nav-link">Bokhylla</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/aboutVue" class="nav-link">Om Vue</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div id="app">
      <img
        :src="image"
        class="img-fluid mx-auto d-block"
        alt="Responsive image"
      />
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
//import header image
import image from "../assets/header_library.jpg";
export default {
  components: {
    RouterLink,
  },
  data: function () {
    return {
      image: image,
    };
  },
};
</script>

<style>
li {
  padding-left: 4em;
}
</style>