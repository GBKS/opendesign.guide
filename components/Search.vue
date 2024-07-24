<script lang="ts" setup>
const searchString = ref('')
const results = ref([])
const searching = ref(false)

const search = async () => {
  searching.value = true
  const result = await searchContent(searchString.value, {})
  results.value = result.value
  searching.value = false
}
</script>

<template>
  <div id="search">
      <input 
        v-model="searchString" 
        @change="search"
      >

      <div class="results">
        <NuxtLink
          v-for="result in results" 
          :key="result.id"
          :to="result.id"
        >
          <h3>{{ result.titles[0] }}</h3>
          <h4>{{ result.title }}</h4>
          <p>{{ result.content }}</p>
          <p>{{ result.score }}</p>
        </NuxtLink>
      </div>
  </div>
</template>

<style lang="scss" scoped>

#search {
  display: none;
  
  input {
    width: 100%;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
}

</style>