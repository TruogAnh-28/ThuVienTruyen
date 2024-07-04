<template lang="pug">
div.combined-container(:class="deviceType")
  template(v-if="deviceType === 'mobile'")
    SliderComponent
  template(v-else-if="deviceType === 'tablet'")
    SliderComponent
    div.tablet-row
      Category
      News
  template(v-else)
    Category
    SliderComponent
    News
</template>

<script>
import Category from '@/components/IntroContent/Category.vue'
import SliderComponent from '@/components/IntroContent/SliderComponent.vue'
import News from '@/components/IntroContent/News.vue'

export default {
  name: 'ContentIntro',
  components: {
    Category,
    SliderComponent,
    News
  },
  data() {
    return {
      deviceType: 'mobile' // default to mobile
    }
  },
  mounted() {
    this.checkDeviceType()
    window.addEventListener('resize', this.checkDeviceType)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDeviceType)
  },
  methods: {
    checkDeviceType() {
      const width = window.innerWidth
      if (width >= 1024) {
        this.deviceType = 'pc'
      } else if (width >= 768 && width < 1024) {
        this.deviceType = 'tablet'
      } else {
        this.deviceType = 'mobile'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.combined-container
  display: flex
  flex-direction: column
  align-items: center
  gap: 20px
  width: 100%
  padding: 20px 0
  box-sizing: border-box

  &.pc
    flex-direction: row
    justify-content: space-between
    align-items: flex-start

  &.tablet,
  &.mobile
    flex-direction: column

.tablet-row
  display: flex
  flex-direction: row
  width: 90%
  gap: 20px

.category-component,
.slider-component,
.news-component
  width: 100%

  &.pc &,
  &.tablet &
    flex: 1
    max-width: 33%

@media (min-width: 1200px)
    .combined-container
        width: 75rem
@media (min-width: 1400px)
    .combined-container
        width: 88rem
    .slider-component
        width:40%
</style>
