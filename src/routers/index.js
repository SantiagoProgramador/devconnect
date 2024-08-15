import { createRouter, createWebHistory } from 'vue-router';

// Importa las vistas
import UserProfile from '../views/UserProfile.vue';
import UserConnections from '../views/UserConnections.vue';
import UserProjects from '../views/UserProjects.vue';
import UserTeams from '../views/UserTeams.vue';

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', name: 'UserProfile', component: UserProfile },
  { path: '/connections', name: 'UserConnections', component: UserConnections },
  { path: '/projects', name: 'UserProjects', component: UserProjects },
  { path: '/teams', name: 'UserTeams', component: UserTeams },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
