<template lang="pug">
div.slider
  Splide(:options="options")
    SplideSlide(v-for="(image, index) in images" :key="index")
      img(:src="image.src" :alt="image.alt" class="slide-image")
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import slider1 from '@/assets/slider1.jpg'
import slider2 from '@/assets/slider2.jpg'
import slider3 from '@/assets/slider3.jpg'

export default {
  name: 'SliderComponent',
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      images: [
        { src: slider1, alt: 'Slider 1' },
        { src: slider2, alt: 'Slider 2' },
        { src: slider3, alt: 'Slider 3' }
      ],
      options: {
        type: 'slide', // Chuyển đổi theo kiểu slide
        rewind: true, // Lặp lại khi đạt tới cuối slideshow
        interval: 3000, // Thời gian chuyển đổi giữa các slide (ms)
        speed: 800, // Tốc độ chuyển đổi (ms)
        autoplay: true, // Tự động chạy slideshow
        pauseOnHover: true // Tạm dừng khi rê chuột vào slider
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.slider
  width: 100%;
  height: auto; /* Độ cao mặc định cho slider */
  overflow: hidden;

.slide-image
  width: 100%;
  height: 18rem; /* Chiều cao mặc định khi width >= 768px */
  object-fit: cover;
  display: block;

@media (max-width: 767px) {
  .slide-image {
    height: 14rem; /* Chiều cao thay đổi khi width < 768px */
  }
}
</style>
