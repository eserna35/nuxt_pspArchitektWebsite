<template>
  <div class="nav__container">
    <nav class="nav__main">
      <li>
        <nuxt-link class="nav__link" exact to="/all">Projekte</nuxt-link>
      </li>
      <li>
        <a href="#" class="nav__link">Über uns</a>
      </li>
      <li>
        <a href="#" class="nav__link">Leistungen</a>
      </li>
      <li>
        <a href="#" class="nav__link">Karriere</a>
      </li>
      <li>
        <a href="#" class="nav__link">Kontakt</a>
      </li>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav__container {
  position: relative;
}

.nav__main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  border: 3px solid var(--clr-accent);
  align-items: baseline;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.nav__main li {
  width: 100%;
  height: 100%;
  display: inline-block;
  flex: 1;
}

.nav__link {
  text-decoration: none;
  color: var(--f-clr);
  text-transform: uppercase;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  transition: color 0.5s ease-in-out;
  text-align: center;
}

.nav__link:hover {
  color: var(--clr-primary);
}
</style>