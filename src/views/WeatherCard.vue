<template>
  <div class="container">
    <temprature-card 
    :temprature="weather.main.temp" 
    :descreption="weather.weather[0].description"
    :name="weather.name"
    :key="weather.name"
    ></temprature-card>
    <rainy v-if="weather.weather[0].main == `Rain`" class="container__weather"></rainy>
    <sunny v-else-if="weather.weather[0].main == `Clear`" class="container__weather"></sunny>
    <cloudy v-else-if="weather.weather[0].main == `Clouds`" class="container__weather"></cloudy>
    <snowy v-else-if="weather.weather[0].main == `Snow`" class="container__weather"></snowy>
    <thunder-storm v-else-if="weather.weather[0].main == `Thunderstorm `" class="container__weather"></thunder-storm>
    <place-holder v-else class="container__weather"></place-holder>
    <!-- <Select v-else class="container__weather"></Select> -->
    <form @submit.prevent="submitHandler" class="container__form">
        <div class="container__input">
          <label>City</label>
          <input type="text" name="text-field" id="text-field" v-model="city" autocomplete="off">
        </div>
        <button type="submit">Submit</button>
    </form>

  </div>
</template>

<script>

import { mapState } from 'vuex'
import store from '@/store/index'
import Sunny from '../components/Sunny.vue'
import Rainy from '../components/Rainy.vue'
import Snowy from '../components/Snowy.vue'
import Cloudy from '../components/Cloudy.vue'
import PlaceHolder from '../components/PlaceHolder.vue'
import ThunderStorm from '../components/ThunderStorm'
// import Select from '../components/Select.vue'
import TempratureCard from '../components/TempratureCard.vue'
function getWeahter () {
  store.dispatch('getWeather', 'toronto')
}
export default {
  components: { TempratureCard, Sunny, Rainy, Snowy, Cloudy, ThunderStorm, PlaceHolder},
  name: 'WeatherCard',
  data() {
    return{
      city: ''
    }
  },
  beforeRouteEnter (routeTo, routeFrom, next) {
    getWeahter()
    next()
  },
  computed: {
    ...mapState(['weather'])

  },
  created (){
    document.addEventListener('focusin', this.focusIn)
    document.addEventListener('focusout', this.focusOut)
  },
  methods: {
    submitHandler(){
      store.dispatch('getWeather', this.city)
      this.city = '';
    },
    focusIn(){
      let label = document.getElementsByTagName('label')[0];

      label.classList.add('red')
    },
    focusOut(){
      let label = document.getElementsByTagName('label')[0];
      label.classList.remove('red')
    },
  }
}
</script>

<style scoped lang="scss">
.red{
 padding-bottom: 1em;
 transition: padding-bottom 200ms ease-out;
}
.container{
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
&__weather{
  margin-bottom: 2rem;
}
&__form{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  button{
    width: 25%;
    border: none;
    border-radius: 5px;
    color: #FFBB57;
    background: #6C63FF;
    cursor: pointer;
    font-size: unquote("clamp(1rem, 0.2500rem + 3.3333vw, 2.5rem)");  
    &:focus{
      outline: none;
    }
    &:hover{
      transform: scale(.98);
    }
        }
}
&__input{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 50%;
  >label{
    align-self: flex-start;
    color: #FFBB57;
    transition: padding-bottom 200ms ease-out;
    font-size: unquote("clamp(.6rem, 0.2500rem + 3.3333vw, 2rem)");  
  }
  >input{
    padding: .5rem;
    width: 100%;
    text-align: center;
    font-size: unquote("clamp(1rem, 0.2500rem + 3.3333vw, 2rem)");  
    border: none;
    background:rgba($color: #d6d3d3, $alpha: 0.7);
    border-radius: 15px;
  }
  >input:focus{
    outline: none;
    transform-origin: center;
    transform: scale(1.02);
    box-shadow: 0px 0px 5px #6C63FF;
    transition: transform 500ms ease-in;

  }

}
}

</style>
