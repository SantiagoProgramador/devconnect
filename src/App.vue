
<template>
  <div id="app">
    <!-- Aquí puedes agregar un encabezado o barra de navegación global -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './styles/_variables.scss';

/* Estilos globales */
#app {
  font-family: $font-stack;
  color: $primary-color;
  padding: 20px;
}
</style>
