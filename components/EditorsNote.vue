<script lang="ts" setup>
const props = defineProps([
  'title'
])
</script>
<template>
  <div class="editors-note">
    <h6>{{ title }}</h6>
    <p><slot></slot></p>
  </div>
</template>
<style lang="scss" scoped>

.editors-note {
  border-radius: 15px;
  padding: 20px;
  background-color: rgba(var(--mint-rgb), 0.15);
  margin-top: 20px;
  margin-bottom: 20px;

  h6 {
    font-size: 19px;
  }

  p {
  }
}

</style>