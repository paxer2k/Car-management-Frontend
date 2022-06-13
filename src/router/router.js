import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import CarList from './../components/cars/CarList.vue'
import AddCar from './../components/cars/AddCar.vue'
import UpdateCar from './../components/cars/UpdateCar.vue'
import MyCarList from './../components/cars/MyCarList.vue'
import Login from './../components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/cars', component: CarList },
    { path: '/addcar', component: AddCar },
    { path: '/updatecar/:id', component: UpdateCar, props: true },
    { path: '/mycars', component: MyCarList},
    { path: '/login', component: Login }
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})


export default router