<script lang="ts" setup>
const searchString = ref('')
const results = ref([])
const searching = ref(false)

const search = async () => {
  console.log('search', searchString.value)
  searching.value = true
  const res = await searchContent(searchString.value, {})
  results.value = res.value // res is a computed so we pluck out the .value and just add it to our ref
  searching.value = false
  console.log('results', results.value)
}
</script>

<template>
  <main>
    <NuxtRouteAnnouncer />
    <NuxtPage />

    <Search />
  </main>
</template>
