import { createRouter, createWebHistory } from "vue-router";
import App from "../src/App";
import AboutUs from "../views/AboutUs";
import ManagingDirector from "../views/ManagingDirector";
import BoardOfDirectors from "../views/BoardOfDirectors";
import Managements from "../views/Managements";
import MethodOfTesting from "../views/MethodOfTesting";
import Products from "../views/Products";
import Gallery from "../views/Gallery";
import ContactUs from "../views/ContactUs";

const routes = [
    {
        path: "/",
        name: "App",
        component: App,
    },
    {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
    },
    {
        path: "/managing-director",
        name: "ManagingDirector",
        component: ManagingDirector,
    },
    {
        path: "/board-of-directors",
        name: "BoardOfDirectors",
        component: BoardOfDirectors,
    },
    {
        path: "/managements",
        name: "Managements",
        component: Managements,
    },
    {
        path: "/method-of-testing",
        name: "MethodOfTesting",
        component: MethodOfTesting,
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: ContactUs,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;