<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in pics" :key="index">
            <img class="home-banner" :src="slide" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "MySwiper",
  props: ["pics"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style scoped>
.home-banner {
  width: 750px;
  height: 320px;
}
</style>
