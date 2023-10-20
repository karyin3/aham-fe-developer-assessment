import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/styles.scss'
import App from './App.vue'
import FundList from './components/FundList.vue'
import InvestmentList from './components/InvestmentList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: FundList },
        { path: '/my-investments', component: InvestmentList },
    ]
});

createApp(App).use(router).mount('#app')
