<template>
  <div id="app">
    <navigation />
    <router-view />
    <ft />
  </div>
</template>

<script>
import ft from "@/components/Footer.vue";
import navigation from "@/components/Navigation.vue";

export default {
  components: {
    ft,
    navigation
  }
};
</script>

<style>
@import "../../node_modules/bulma/css/bulma.min.css";

body {
  background-color: black !important;
  color: white !important;
  min-height: 1000px;
  font-family: "Times New Roman", Times, serif;
}

h1,
h2 {
  color: white !important;
}

table,
th {
  background-color: black !important;
  background: black;
  color: white !important;
}
</style>
