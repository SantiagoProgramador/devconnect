
<template>
  <div id="app">
    <SideBar/>
    <!-- Aquí puedes agregar un encabezado o barra de navegación global -->
    <router-view />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  }
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
