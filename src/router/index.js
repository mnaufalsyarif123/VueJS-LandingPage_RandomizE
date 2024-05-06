import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LandingPage.vue";
import CalculatorApp from "../views/Calculator.vue";
import Imggen from "../views/ImgGen.vue";
import LoginComponent from "../components/LoginComponent.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: CalculatorApp,
  },
  {
    path: "/Imggen",
    name: "Imggen",
    component: Imggen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
