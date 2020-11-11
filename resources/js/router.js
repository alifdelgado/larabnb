import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from './views/Home';
import AboutComponent from './views/About';
import ContactComponent from './views/Contact';
import BookableComponent from './views/bookables/Bookable';
import BookablesComponent from './views/bookables/Bookables';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/bookable",
            name: "bookables",
            component: BookablesComponent,
        },
        {
            path: "/bookable/:id",
            name: "bookable_show",
            component: BookableComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactComponent,
        }
    ]
});

export default router;
