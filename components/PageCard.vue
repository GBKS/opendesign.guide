<script lang="ts" setup>

const props = defineProps([
  'info'
])

const imageSource = computed(() => {
  let result = null

  if(props.info.thumbnail) {
    result = '/images/'+props.info.thumbnail[0]
  }

  return null
})

const imageSourceSet = computed(() => {
  const result = []

  if(props.info.thumbnail) {
    props.info.thumbnail.forEach((image) => {
      result.push('/images/'+image)
    })
  }

  return result.join(' 1x, ') + ' 2x'
})

const colorStyle = computed(() => {
  return '--color: '+props.info.colors.card+';'
})

</script>

<template>
  <NuxtLink
    class="page-card"
    :key="info._path"
    :to="info._path"
  >
    <img
      :src="imageSource"
      :srcset="imageSourceSet"
      alt=""
    >
    <div class="copy" :style="colorStyle" data-color>
      <p>{{ info.chapter }}</p>
      <h2>{{ info.title }}</h2>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>

.page-card {
  position: relative;
  text-decoration: none;
  aspect-ratio: 0.75;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f8f8f8;
  display: block;
  transition: all 250ms $ease;
  box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.2);

  .copy {
    position: relative;
    padding: 20px;

    p {
      font-size: 14px;
      font-weight: 600;
      color: white;
    }

    h2 {
      margin-top: 5px;
      font-size: 24px;
      line-height: 1.1;
      font-weight: 600;
      color: white;
    }

    &[data-color]  {
        p, h2 {
            color: var(--color);
        }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>