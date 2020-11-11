/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import router from './router';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('index-component', require('./Index').default);
Vue.component('navbar-component', require('./views/Navbar').default);
Vue.component('bookable-item', require('./views/bookables/BookableItem').default);
Vue.component('bookable-list-item', require('./views/bookables/BookableListItem').default);
Vue.component('availability-component', require('./views/bookables/Availability').default);
Vue.component('review-item', require('./views/reviews/ReviewItem').default);
Vue.component('review-list-item', require('./views/reviews/ReviewListItem').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
