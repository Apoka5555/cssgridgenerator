<template>
  <div id="app">
    <AppHeader />
    <section class="container">
      <AppGrid />
      <AppForm />
    </section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppGrid from "./components/AppGrid.vue";
import AppForm from "./components/AppForm.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppGrid,
    AppForm,
  },
};
</script>

<style lang="scss">
#app {
  margin: 5vmin 5vmin 0;
}

.container {
  display: flex;
}

@media screen and (max-width: 767px) {
  .container {
    flex-direction: column;
  }
}
</style>
