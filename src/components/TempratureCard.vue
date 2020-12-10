<template>
<div class="container__temprature-card">
    <div class="temprature">
        {{name}} {{temprature}}°f  
    </div>
    <div class="descreption">
        {{descreption ? descreption : ''}}
    </div>
</div>
</template>

<script>
export default {
  name: 'TempratureCard',
  props: {
    temprature: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    descreption: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Sancreek&display=swap');

.container__temprature-card{
    width: 15rem;
    height: 15rem;
    margin-top: 2rem;
    align-self: flex-start;
    margin-left: 15%;
    // position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    'temp   temp'
    '.      desc'
    ;
}
.temprature{
    grid-area: temp;
    font-family: Sancreek;
    font-style: normal;
    font-weight: normal;
    font-size: unquote("clamp(2rem, 0.2500rem + 3.3333vw, 2.5rem)");
    line-height: 67px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6C63FF;
    animation: animation 2s ease-in forwards;

    }
@keyframes animation {
    from{
        opacity: 0;
        transform: scale(1.5);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes animation2 {
    from{
        opacity: 0;
        transform: translateX(-100%);
    }
    to{
        opacity: 1;
        transform: translateX(0%);
    }
}
.descreption{
    grid-area: desc;
    font-family: Sancreek;
    margin-left: 2rem;
    opacity: 0;
    font-style: normal;
    font-weight: normal;
    font-size: unquote("clamp(2rem, 0.2500rem + 3.3333vw, 2.5rem)");
    line-height: 3rem;
    color: #FFBB57;
    text-transform: capitalize;
    animation: animation2 500ms  2s ease-in forwards;
    }

</style>
