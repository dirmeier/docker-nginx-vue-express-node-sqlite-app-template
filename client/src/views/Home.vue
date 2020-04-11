<template>
  <section class="section">
    <home />
  </section>
</template>

<script>
import home from "@/components/Home.vue";

export default {
  components: {
    home
  },
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = "Home";
      }
    }
  }
};
</script>
