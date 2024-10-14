<template>
  <div class="editors-note">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>

.editors-note {
  border-radius: 15px;
  padding: 20px;
  background-color: rgba(var(--mint-rgb), 0.05);
  margin-top: 20px;
  margin-bottom: 20px;

  :deep(h6) {
    font-size: 15px !important;
  }

  :deep(p) {
    font-size: 15px !important;
  }
}

</style>