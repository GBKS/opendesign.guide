<script lang="ts" setup>

const props = defineProps([
  'info',
  'scrollPosition',
  'isMobile'
])

const mouseX = ref(0)
const mouseY = ref(0)
const imageOffsetX = ref(0)
const imageOffsetY = ref(0)
const canvas = ref(null)
let updateTimer = null

const imageSourceBack = computed(() => {
  let result = null

  if(props.info.thumbnail_back) {
    result = '/images/'+props.info.thumbnail_back[0]
  }

  return null
})

const imageSourceBackSet = computed(() => {
  const result = []

  if(props.info.thumbnail_back) {
    props.info.thumbnail_back.forEach((image) => {
      result.push('/images/'+image)
    })
  }

  return result.join(' 1x, ') + ' 2x'
})

const imageSourceMid = computed(() => {
  let result = null

  if(props.info.thumbnail) {
    result = '/images/'+props.info.thumbnail[0]
  }

  result = '/images/welcome-thumb-mid.png'

  return null
})

const imageSourceMidSet = computed(() => {
  const result = []

  if(props.info.thumbnail_mid) {
    props.info.thumbnail_mid.forEach((image) => {
      result.push('/images/'+image)
    })
  }

  return result.join(' 1x, ') + ' 2x'
})

const imageSourceFront = computed(() => {
  let result = null

  if(props.info.thumbnail) {
    result = '/images/'+props.info.thumbnail[0]
  }

  return null
})

const imageSourceFrontSet = computed(() => {
  const result = []

  if(props.info.thumbnail_front) {
    props.info.thumbnail_front.forEach((image) => {
      result.push('/images/'+image)
    })
  }

  return result.join(' 1x, ') + ' 2x'
})

const colorStyle = computed(() => {
  return '--color: '+props.info.colors.card+';'
})

const imageFrontStyle = computed(() => {
  const maxDelta = 0

  const left = (-imageOffsetX.value * maxDelta) + 'px'
  const top = (-imageOffsetY.value * maxDelta) + 'px'

  return {
    top: -maxDelta + 'px',
    left: -maxDelta + 'px',
    width: 'calc(100% + '+(maxDelta*2)+'px)',
    height: 'calc(100% + '+(maxDelta*2)+'px)',
    transform: 'translate3d('+left+', '+top+', 0)'
  }
})

const imageMidStyle = computed(() => {
  const maxDelta = 10

  const left = (-imageOffsetX.value * maxDelta) + 'px'
  const top = (-imageOffsetY.value * maxDelta) + 'px'

  return {
    top: -maxDelta + 'px',
    left: -maxDelta + 'px',
    width: 'calc(100% + '+(maxDelta*2)+'px)',
    height: 'calc(100% + '+(maxDelta*2)+'px)',
    transform: 'translate3d('+left+', '+top+', 0)'
  }
})

const imageBackStyle = computed(() => {
  const maxDelta = 20

  const left = (-imageOffsetX.value * maxDelta) + 'px'
  const top = (-imageOffsetY.value * maxDelta) + 'px'

  return {
    top: -maxDelta + 'px',
    left: -maxDelta + 'px',
    width: 'calc(100% + '+(maxDelta*2)+'px)',
    height: 'calc(100% + '+(maxDelta*2)+'px)',
    transform: 'translate3d('+left+', '+top+', 0)'
  }
})

function mouseMove(event) {
  if(!props.isMobile) {

    const rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left; //x position within the element.
    const y = event.clientY - rectangle.top; 

    mouseX.value = x
    mouseY.value = y

    if(!updateTimer) {
      updateTimer = setInterval(updateImagePositions, 25)
    }
  }
}

function updateImagePositions() {
  if(!canvas.value) return

  const element = canvas.value.$el

  const canvasWidth = element.offsetWidth || 300
  const canvasHeight = element.offsetHeight || 300

  const left = mouseX.value/canvasWidth - 0.5
  const top = mouseY.value/canvasHeight - 0.5

  const deltaX = (left - imageOffsetX.value) * 0.1
  const deltaY = (top - imageOffsetY.value) * 0.1

  imageOffsetX.value = imageOffsetX.value + deltaX
  imageOffsetY.value = imageOffsetY.value + deltaY

  const minValue = 0.01
  if(Math.abs(deltaX) < minValue && Math.abs(deltaY) < minValue) {
    clearInterval(updateTimer)
    updateTimer = null
  }
}

function updateImagePositionsOnMobile() {
  const element = canvas.value.$el

  const rectangle = element.getBoundingClientRect();

  const upperEdge = window.innerHeight/2 - rectangle.height/2
  const lowerEdge = window.innerHeight/2 + rectangle.height/2 
  const position = rectangle.top + rectangle.height/2

  const percentage = (position - upperEdge) / (lowerEdge - upperEdge)

  const top = percentage - 0.5

  const deltaY = (top - imageOffsetY.value) * 0.1

  imageOffsetY.value = imageOffsetY.value + deltaY

  const minValue = 0.01
  if(Math.abs(deltaY) < minValue) {
    clearInterval(updateTimer)
    updateTimer = null
  }
}

watch(() => props.scrollPosition, () => {
  if(props.isMobile) {
    updateImagePositionsOnMobile()
  }
})

</script>

<template>
  <NuxtLink
    class="page-card"
    :key="info._path"
    :to="info._path"
    ref="canvas"
    @mousemove="mouseMove"
  >
    <img
      :style="imageBackStyle"
      :src="imageSourceBack"
      :srcset="imageSourceBackSet"
      alt=""
    >
    <img
      :style="imageMidStyle"
      :src="imageSourceMid"
      :srcset="imageSourceMidSet"
      alt=""
    >
    <img
      :style="imageFrontStyle"
      :src="imageSourceFront"
      :srcset="imageSourceFrontSet"
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
    transform-origin: center;
  }
}

</style>