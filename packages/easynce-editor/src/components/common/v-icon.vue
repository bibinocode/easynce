<script setup lang="ts">
import iconConfig, { type ConfigIcon } from '@/config/icon'

interface IconProps {
  icon: ConfigIcon
}

const prosp = defineProps<IconProps>()

const iconSrc = computed(() => iconConfig[prosp.icon as ConfigIcon])
</script>
<template>
  <div class="v-icon-container">
    <Icon :icon="iconSrc" />
  </div>
</template>

<style scoped lang="scss">
.v-icon-container {
  width: 100%;
  height: 100%;
}
</style>
