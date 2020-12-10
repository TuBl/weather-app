import Vue from "vue";
import Vuex from "vuex";
import weatherService from '@/services/weatherService'
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        weather: {}
	},
	getters: {

	},
	actions: {
     async  getWeather({commit}, city){
        try {
                console.log('store')
                const response = await weatherService.getWeather(city);
                commit('SET_WEATHER', response.data);
                return response.data;   
        } catch (error) {
                console.error(error)
        }

        }

	},
	mutations: {
        SET_WEATHER(state, weather){
            state.weather = weather;
        }
	},
	modules: {},
});