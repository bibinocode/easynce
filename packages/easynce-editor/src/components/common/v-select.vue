<script setup lang="ts">
const props = withDefaults(
  defineProps<{ width: number; options: { value: string; label: string }[] }>(),
  {
    width: 90,
    options: () => [
      {
        value: 'desktop',
        label: '桌面端',
      },
      {
        value: 'mobile',
        label: '移动端',
      },
    ],
  },
)

const styles = computed(() => ({ width: props.width + 'px' }))

const model = defineModel({ default: 'desktop' })

const change = (value: string) => {
  model.value = value
}
</script>
<template>
  <div class="v-select-container">
    <el-select :model-value="model" :style="styles" :teleported="false" @change="change">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<style scoped lang="scss">
.v-select-container {
  background-color: var(--color-bg);
}

:deep(.el-select__popper) {
  border-radius: var(--border-radius);
  top: 34px !important;
  left: 0 !important;
}
:deep(.el-popper__arrow) {
  display: none;
}
:deep(.el-select-dropdown__list) {
  padding: 3px 0;
}
:deep(.el-select-dropdown__item) {
  border-radius: var(--border-radius);
  margin: 0 3px;
  padding: 0 44px 0 8px;
}
:deep(&.is-hovering) {
  background-color: var(--color-block-hover);
}

:deep(.el-select__wrapper) {
  box-shadow: none !important;
}
:deep(.el-select__wrapper:hover) {
  box-shadow: none !important;
}
:deep(.el-select__wrapper) {
  min-height: 28px;
  background-color: var(--color-block-hover);
}
:deep(.el-select__wrapper.is-hovering) {
  background-color: var(--color-block-hover);
}
:deep(.el-select__wrapper.is-focused) {
  background-color: var(--color-block-hover);
}
</style>
