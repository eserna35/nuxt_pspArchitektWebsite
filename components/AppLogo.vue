<template>
  <div>
    <div class="logo">
      <img src="~/assets/img/Logo PSP.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.logo img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: var(--img-opacity);
}

.logo:hover img {
  opacity: 1;
}
</style>