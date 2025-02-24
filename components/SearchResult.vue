<script lang="ts" setup>
const props = defineProps([
  'info',
  'bestScore',
  'worstScore'
])

const relativeScore = computed(() => {
  return (props.info.score - props.worstScore) / (props.bestScore - props.worstScore)
})
</script>

<template>
  <NuxtLink class="search-result">
    <h3>{{ info.titles[0] }}</h3>
    <h4>{{ info.title }}</h4>
    <p>{{ info.content }}</p>
  </NuxtLink>
</template>

<style lang="scss" scoped>

.search-result {
  display: block;
  text-decoration: none;
  transition: all 150ms $ease;
  padding: 10px 15px;
  border-radius: 10px;

  h3 {
    font-weight: 500;
    opacity: 0.65;
    @include r('font-size', 15, 17);
  }

  h4 {
    @include r('font-size', 17, 19);
  }

  p {
    margin-top: 3px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    background-color: #f8f8f8;
  }
}

</style>