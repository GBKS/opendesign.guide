<script lang="ts" setup>
const props = defineProps([
  'active',
])

const emit = defineEmits(['close'])
const input = ref(null)
const searchString = ref('')
const results = ref([])
const searching = ref(false)
const bestScore = ref(0)
const worstScore = ref(0)
const searchStatus = ref('initial')

const search = async () => {
  searching.value = true
  searchStatus.value = 'searching'
  const result = await searchContent(searchString.value, {})
  results.value = result.value
  searching.value = false
  
  if(result.value.length === 0) {
    searchStatus.value = 'no-results'
  } else {
    searchStatus.value = 'results'
  }

  bestScore.value = 0
  worstScore.value = 0
  for(let i=0; i<result.value.length; i++) {
    const item = result.value[i]
    if(!bestScore.value || item.score > bestScore.value) {
      bestScore.value = item.score
    }
    if(!worstScore.value || item.score < worstScore.value) {
      worstScore.value = item.score
    }
  }
}

const classObject = computed(() => {
  const c = [
    'search',
    '-' + searchStatus.value
  ]

  if(props.active) c.push('-active')

  return c.join(' ')
})

function handleKeyUp(event) {
  if(event.key === 'Escape') {
    emit('close')
  }
}

function updateKeyListener() {
  if(props.active) {
    document.addEventListener('keyup', handleKeyUp)
  } else {
    document.removeEventListener('keyup', handleKeyUp)
  }
}

watch(() => props.active, () => {
  updateKeyListener()

  if(props.active && input.value) {
    setTimeout(() => {
      input.value.focus()
    }, 100)
  }
})
</script>

<template>
  <div :class="classObject">
    <div class="content">
      <div class="box">
        <input 
          v-model="searchString"
          type="search"
          placeholder="Search & find..."
          ref="input"
          @change="search"
        >
      </div>

      <div class="results">
        <p v-if="searchStatus === 'no-results'">Sorry, no results...</p>
        <SearchResult
          v-for="result in results" 
          :key="result.id"
          :to="result.id"
          :info="result"
          :bestScore="bestScore"
          :worstScore="worstScore"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  @include r('padding', 10, 40);

  &.-active {
    display: flex;
  }

  .content {
    flex-basis: 600px;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;

    .box {
      padding: 20px 20px 10px 20px;

      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        appearance: none;
        border-width: 0;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 100px;
        padding: 10px 20px;
      }
    }

    .results {
      flex-basis: 0;
      flex-grow: 1;
      overflow-y: scroll;
      padding: 10px 10px;

      > p {
        text-align: center;
        font-weight: 500;
        @include r('font-size', 16, 24);
      }
    }
  }
}

</style>