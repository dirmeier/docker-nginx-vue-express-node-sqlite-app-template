<template>
  <section class="section">
    <about />
  </section>
</template>

<script>
import about from "@/components/About.vue";

export default {
  components: {
    about
  },
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = "About";
      }
    }
  }
};
</script>
