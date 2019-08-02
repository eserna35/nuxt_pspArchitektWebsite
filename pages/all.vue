<template>
  <div class="grid-card">
    <div v-for="item in projects" :key="item.id">
      <app-card :project="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppCard from "~/components/AppCard.vue";

export default {
  components: { AppCard },
  computed: {
    ...mapState(["projects"])
  }
};
</script>

<style scoped>
.grid-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
}

.grid-card div {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 720px) {
  .grid-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
  }
}

@media screen and (max-width: 368px) {
  .grid-card {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>