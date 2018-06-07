<template>
  <div class="about-page">
      <h1>An Idealist with Laziness</h1>
      <p>게으른 이상주의자</p>
      <p>25살</p>
      <p>성균관대 글로벌경영학</p>
      <p>늦바람에 코딩이 재밌더라</p>
      <br>
      <h3>TECH STACK</h3>
      <swiper class="swiper-container" ref="mySwiper" :options="swiperOption">
         <swiper-slide class="swiper-slide">
           <h4>Javascript</h4>
           <img src="~assets/images/javascript.svg" alt="">
         </swiper-slide>
         <swiper-slide class="swiper-slide">
           <h4>Vuejs (vuex,nuxt)</h4>
           <img src="~assets/images/Vuejs.svg" alt="">
         </swiper-slide>
         <swiper-slide class="swiper-slide">
             <h4>Nodejs</h4>
             <img class="nodejs" src="~assets/images/nodejs2.jpg" alt="">
         </swiper-slide>
         <swiper-slide class="swiper-slide">
           <h4>Python</h4>
           <img src="~assets/images/python.jpg" alt="">
         </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
      <p> 열심히 배우고 있는데 어디다 써먹을지 모르겠다. 좋은 아이디어 있으면 같이 해요.</p>
  </div>




</template>

<script type="text/javascript">
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000
        }
      }
  }
}
}
</script>

<style scoped>
.about-page {
  text-align: center;
  padding: 20px;
  padding-top: 50px;
  height:100%;
  position: relative;
  z-index: 5;
}

h1 {
  margin-bottom: 0px;
}

.swiper-container {
    width: 100%;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (min-width: 850px) {
  .swiper-container {
    width: 400px;
    height: 400px;
  }
}


img {
  display: block;
  max-width: 100%;
}

ul {
  list-style-type: none;
  list-style: none;
}

h4 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-44%);
  font-size: 18px;
  color: dimgray;
}

</style>
