// src/composables/useDevice.js
import { ref, onMounted, onUnmounted } from 'vue'

export const useDevice = () => {
  const deviceType = ref(getDeviceType())

  const updateDeviceType = () => {
    deviceType.value = getDeviceType()
  }

  onMounted(() => {
    window.addEventListener('resize', updateDeviceType)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDeviceType)
  })

  return { deviceType }
}

const isMobile = () => window.innerWidth <= 768
const isTablet = () => window.innerWidth > 768 && window.innerWidth <= 1024
const isPC = () => window.innerWidth > 1024

const getDeviceType = () => {
  if (isMobile()) return 'mobile'
  if (isTablet()) return 'tablet'
  if (isPC()) return 'pc'
  return 'mobile'
}
