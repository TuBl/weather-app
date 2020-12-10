import Vue from 'vue'
import Router from 'vue-router'
import WeatherCard from '@/views/WeatherCard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'WeatherCard',
      component: WeatherCard
    }

  ]
})
