import { createRouter,createWebHistory } from "vue-router"; 
import HomePage from '../views/HomePage'
import ProductPage from '../views/ProductPage'
import ServicePage from '../views/ServicePage'
import ContactPage from '../views/ContactPage'
import ErrorPage from '../views/ErrorPage'
import SignUpPage from '../views/SignUpPage'


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component:HomePage
        },
        {
            path:'/products',
            name:'Products',
            component:ProductPage   
        },
        {
            path:'/services',
            name:'Services',
            component:ServicePage
        },
        {
            path:'/contact',
            name:'Contact',
            component:ContactPage   
        },
        {
            path:'/home',
            redirect:'/'  
        },
        {
            path:'/:catchAll(.*)',
            name:'error',
            component:ErrorPage   
        },
        {
            path:'/signup',
            name:'SignUp',
            component:SignUpPage   
        }
        
    ]
})

export default router;