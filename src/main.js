import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';

import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import PerfilEmpresa from './components/PerfilEmpresa.vue';
import PerfilVacante from './components/PerfilVacante.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PerfilEmpresa },
    { path: '/vacante', component: PerfilVacante },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');