<template>
  <div class="edit-container">
    <EditorHeader />
    <div class="container">
      <EditorBlock />
      <EditorRender />
      <EditorConfig />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.edit-container {
  .container {
    display: flex;
  }
}
</style>
