import { createRouter, createWebHistory } from 'vue-router'
import SigninView from "../Pages/Authentication/SigninView.vue";
import SignupView from "@/Pages/Authentication/SignupView.vue";
import CalendarView from "@/Pages/CalendarView.vue";
import BasicChartView from "@/Pages/Charts/BasicChartView.vue";
import ECommerceView from "@/Pages/ECommerceView.vue";
import FormLayoutView from "@/Pages/Forms/FormLayoutView.vue";
import SettingsView from "@/Pages/Pages/SettingsView.vue";
import ProfileView from "@/Pages/ProfileView.vue";
import TablesView from "@/Pages/TablesView.vue";
import AlertsView from "@/Pages/UiElements/AlertsView.vue";
import ButtonsView from "@/Pages/UiElements/ButtonsView.vue";
import FormElementsView from "@/Pages/Forms/FormElementsView.vue";

const routes = [
  {
    path: '/',
    name: 'eCommerce',
    component: ECommerceView,
    meta: {
      title: 'eCommerce Dashboard',
      requiresAuth: true
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar',
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile',
      requiresAuth: true
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements',
      requiresAuth: true
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout',
      requiresAuth: true
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables',
      requiresAuth: true
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings',
      requiresAuth: true
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart',
      requiresAuth: true
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts',
      requiresAuth: true
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons',
      requiresAuth: true
    }
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin'
    }
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const token = localStorage.getItem('token');
//     if (token) {
//       next();
//     } else {
//       next('/auth/signin');
//     }
//   } else {
//     next();
//   }
// })

export default router
