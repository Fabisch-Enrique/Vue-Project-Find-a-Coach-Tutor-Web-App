import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './PAGES/coaches/CoachDetail.vue';
import CoachesList from './PAGES/coaches/CoachesList.vue';
import CoachRegistration from './PAGES/coaches/CoachRegistration.vue';
import ContactCoach from './PAGES/requests/ContactCoach.vue';
import RequestsReceived from './PAGES/requests/RequestsReceived.vue';
import NotFound from './PAGES/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
