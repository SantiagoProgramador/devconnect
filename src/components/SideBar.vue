<template>
  <div class="sidebar">
    <router-link to="/home" class="link">
      <font-awesome-icon :icon="['fas', 'home']" class="icon" />
    </router-link>
    <router-link to="/search" class="link">
      <font-awesome-icon :icon="['fas', 'search']" class="icon" />
    </router-link>
    <router-link to="/notifications" class="link">
      <font-awesome-icon :icon="['fas', 'bell']" class="icon" />
    </router-link>
    <router-link to="/settings" class="link">
      <font-awesome-icon :icon="['fas', 'cog']" class="icon" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faSearch, faBell, faCog);

export default defineComponent({
  components: {
    FontAwesomeIcon
  }
});
</script>

<style scoped>
.sidebar {
  height: 100vh;
  width: 60px;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.link {
  color: white;
  text-decoration: none;
  margin: 15px 0;
}

.link:hover {
  color: #ddd;
}

.icon {
  font-size: 24px;
}
</style>
