<script lang="ts" setup>
const props = defineProps([
  'active'
])

const classObject = computed(() => {
  const c = ['search-button']

  if(props.active) c.push('-active')

  return c.join(' ')
})
</script>

<template>
  <button
    :class="classObject"
    :aria-selected="active"
    title="Toggle search"
  >
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 11L15 15M12.25 6.5C12.25 9.67564 9.67564 12.25 6.5 12.25C3.32436 12.25 0.75 9.67564 0.75 6.5C0.75 3.32436 3.32436 0.75 6.5 0.75C9.67564 0.75 12.25 3.32436 12.25 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<style lang="scss" scoped>

.search-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: block;
  appearance: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: all 100ms $ease;
  cursor: pointer;

  svg {
    color: black;
    width: 22px;
    height: 22px;
  }

  &:hover {
    opacity: 1;
  }
}

</style>