<template>
  <div class="wrapper">
    <header>
      <app-logo />
      <app-nav />
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>


<script>
import AppNav from "~/components/AppNavigation.vue";
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: { AppNav, AppLogo }
};
</script>


<style>
body {
  min-height: 100vh;
  width: 100%;
  line-height: var(--text-line-height);
}

div.wrapper {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 75vw) 1fr;
  grid-template-areas:
    ". header ."
    ". main . "
    ". footer . ";
}

header {
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-areas: "logo navigation";
  grid-column-gap: 10px;
  padding: 1em 0;
}

main {
  grid-area: main;
  border-top: 2px solid var(--clr-accent);
}

app-logo {
  grid-area: logo;
  max-width: 125px;
  height: 100%;
}

app-nav {
  grid-area: navigation;
}
</style>
