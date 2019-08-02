<template>
  <!-- :style="{'background-image': 'url(/img/' + project.id  + '/01-Titel.JPG)'}" -->
  <div class="card">
    <img :src="'/img/' + project.id  + '/01-Titel.JPG'" />
    <div class="card__content">
      <h3 class="card__title">{{project.name}}</h3>
      <p class="card__body">{{project.year}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  color: var(--f-clr-light);
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card::after {
  content: "";
  background: black;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.card:hover::after {
  opacity: 0.5;
}

.card__content {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: scale 0.5s ease-in-out;
}

.card:hover .card__content {
  transform: translate(-50%, -50%) scale(1);
}
.card__body {
}
</style>