<template>
<Bootstrap />
<Header />
<main>
  <RouterView />
  <Footer />
</main>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Bootstrap from "./components/Bootstrap.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    RouterView,
    Bootstrap,
    Footer
  }
}

</script>


<style>

</style>
