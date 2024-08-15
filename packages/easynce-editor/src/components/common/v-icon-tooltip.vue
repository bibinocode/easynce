<template>
  <div class="v-icon-tooltip-container">
    <el-tooltip class="tip" effect="dark" :content="content" :placement="placement" :hide-after="0">
      <div class="image-box">
        <v-icon v-if="icon" class="image" :icon="icon" />
        <slot v-else class="image" />
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import type { ConfigIcon } from '@/config/icon'

interface VIconToolTipProps {
  icon: ConfigIcon
  content: string
  placement: string
}

withDefaults(defineProps<VIconToolTipProps>(), {
  placement: 'bottom',
})
</script>

<style scoped lang="scss">
.v-icon-tooltip-container {
  user-select: none;
}
.image-box {
  cursor: pointer;
  width: 26px;
  height: 26px;
  padding: 3px;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.2s linear;
  &:hover {
    background: var(--color-icon-hover);
    transition: all 0.2s linear;
  }
  .image {
    width: 100%;
    height: 100%;
    font-size: 26px;
    display: flex;
    align-items: center;
  }
}
</style>
