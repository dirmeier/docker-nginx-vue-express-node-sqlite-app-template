<template>
  <div class="container">
    <div class="columns">
      <div class="column is-four-fifth">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Home
              </h1>
              <h2 class="subtitle">
                5 of my favourite books
              </h2>
            </div>
          </div>
        </section>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>Author</th>
              <th>Title</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in messages" :key="index">
              <td style="min-width: 10px">{{ index + 1 }}</td>
              <td>{{ entry.author }}</td>
              <td>{{ entry.title }}</td>
              <td>{{ entry.publisher }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    error: "",
    messages: []
  }),
  mounted() {
    fetch("get_books")
      .then(response => response.json())
      .then(result => {
        this.messages = result.sort(function(i, j) {
          return i.author.localeCompare(j.author);
        });
      });
  },
  methods: {}
};
</script>
