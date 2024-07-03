<template lang="pug">
div.slider
  div(v-for="(image, index) in images" :key="index" class="slide" :class="{ active: index === currentIndex }")
    img(:src="image.src" :alt="image.alt" class="slide-image")
</template>

<script>
import slider1 from '@/assets/slider1.jpg'
import slider2 from '@/assets/slider2.jpg'
import slider3 from '@/assets/slider3.jpg'

export default {
  name: 'SliderComponent',
  data() {
    return {
      images: [
        { src: slider1, alt: 'Slider 1' },
        { src: slider2, alt: 'Slider 2' },
        { src: slider3, alt: 'Slider 3' }
      ],
      currentIndex: 0
    }
  },
  mounted() {
    this.startSlider()
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }, 3000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.slider
  position relative
  width 100%
  height 150px
  overflow hidden

.slide
  display none
  position absolute
  width 100%
  height 100%

.slide.active
  display block

.slide-image
  width 100%
  height 100%
  object-fit cover

// Media Queries
@media (min-width: 768px) // Tablet
  .slider
    width 70%

@media (min-width: 1024px) // PC
  .slider
    width 60%
    height 280px
</style>
