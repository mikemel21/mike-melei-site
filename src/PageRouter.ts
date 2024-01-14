import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import Blog from "./components/Blog.vue";
import ContactMe from "./components/ContactMe.vue";

// define routes
const CompRoutes = [
    { path: "/", component: Home },
    { path: "/About", component: AboutMe },
    { path: "/Projects", component: Projects },
    { path: "/Blog", component: Blog },
    { path: "/Contact", component: ContactMe }
];

// Create router instance
export const myRouter = createRouter({
    history: createWebHashHistory(),
    routes: CompRoutes
});