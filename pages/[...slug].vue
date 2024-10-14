<script lang="ts" setup>
import EmptyHeader from '../components/EmptyHeader.vue'

const route = useRoute()
const routePath = route.path
const { data: pageData } = await useAsyncData('page-data-'+route.path, queryContent(route.path).findOne)
const { data: allPages } = await useAsyncData('all-pages', queryContent().find)

const searchActive = ref(false)

const components = {
  'h1': EmptyHeader
}

watch(() => route.path, () => {
  hideSearch()
})

function toggleSearch() {
    if(searchActive.value) hideSearch()
    else showSearch()
}

function showSearch() {
    searchActive.value = true
    document.body.classList.add('-search-active')
}

function hideSearch() {
    searchActive.value = false
    document.body.classList.remove('-search-active')
}

const imageSource = computed(() => {
  let result = null

  if(pageData.value) {
    result = '/images/'+pageData.value.images[0]
  }

  return null
})

const imageSourceSet = computed(() => {
  const result = []

  if(pageData.value) {
    pageData.value.images.forEach((image) => {
      result.push('/images/'+image)
    })
  }

  return result.join(' 1x, ') + ' 2x'
})

const styleObject = computed(() => {
  return {
    backgroundColor: pageData.value?.colors.base || null
  }
})

const chapterStyle = computed(() => {
  return {
    color: pageData.value?.colors.accentOne || null
  }
})

const accentTwoStyle = computed(() => {
  return '--color: '+pageData.value?.colors.accentTwo+';'
})

const headers = computed(() => {
  let result = []

  if(pageData.value) {
    const children = pageData.value.body.children
    let i=0, child
    for(; i<children.length; i++) {
      child = children[i]

      if(child.tag == 'h2') {
        result.push(child)
      }
    }
  }

  return result
})

const nextPage = computed(() => {
  let result = null

  console.log('checking', routePath)

  if(allPages.value) {
    let isMatch = false
    for(let i=0; i<allPages.value.length; i++) {
      const page = allPages.value[i]

      if(isMatch) {
        result = {
            title: page.title,
            chapter: page.chapter,
            path: page._path
        }
        break
      }

      isMatch = page._path == route.path
    }
  }

  return result
})

const previousPage = computed(() => {
  let result = null

  if(allPages.value) {
    for(let i=0; i<allPages.value.length; i++) {
      const page = allPages.value[i]

      if(page._path === route.path) {
        if(i > 0) {
            const previous = allPages.value[i-1]

            result = {
                title: previous.title,
                chapter: previous.chapter,
                path: previous._path
            }
            break
        }
      }
    }
  }

  return result
})

const title = computed(() => {
  return pageData.value?.body.children[0].children[0].value || ''
})

onMounted(() => {
    document.body.classList.remove('-search-active')
})

</script>

<template>
    <div class="article-page" :style="styleObject">
        <img
            :src="imageSource"
            :srcset="imageSourceSet"
            alt=""
        >
        <div class="content">
            <header :style="accentTwoStyle" data-color>
                <NuxtLink class="logo" to="/">Open Design Guide</NuxtLink>
            </header>
            <article :style="accentTwoStyle" data-color>
                <p class="-chapter" :style="chapterStyle">{{ pageData?.chapter }}</p>
                <h1>{{ title }}</h1>
                <TableOfContents :content="headers" />
                <ContentDoc :components="components" />
            </article>
            <div class="pagination">
                <NuxtLink
                    v-if="previousPage"
                    :to="previousPage.path"
                    class="-previous"
                >
                    <p>{{ previousPage.chapter }}</p>
                    <h5>{{  previousPage.title }}</h5>
                </NuxtLink>
                <NuxtLink
                    v-if="nextPage"
                    :to="nextPage.path"
                    class="-next"
                >
                    <p>{{ nextPage.chapter }}</p>
                    <h5>{{  nextPage.title }}</h5>
                </NuxtLink>
            </div>
            <SearchButton
                :active="searchActive"
                @click="toggleSearch"
            />
            <Search
                :active="searchActive"
                @close="hideSearch"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>

.article-page {
    position: relative;
    padding: 75px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 30px;
        max-width: 940px;
        box-sizing: border-box;
        border-radius: 15px;
        background-color: white;
        @include r('padding', 20, 70);

        header {
            display: flex;
            justify-content: space-between;

            .logo {
                font-family: 'DM Serif Display', serif;
                font-weight: 600;
                font-size: 24px;
                text-decoration: none;
                color: black;
            }

            &[data-color]  {
                .logo {
                    &:hover {
                        color: var(--color);
                    }
                }
            }
        }

        article {
            p {
                &.-chapter {
                    font-family: 'DM Serif Display', serif;
                    font-weight: 600;
                    line-height: 1.1;
                    @include r('font-size', 32, 48);
                }
            }

            :deep(h1) {
                font-family: 'DM Serif Display', serif;
                line-height: 1.1;
                letter-spacing: 0;
                @include r('font-size', 32, 48);
            }

            &[data-color]  {
                :deep(h1) {
                    color: var(--color);

                    & + p {
                        margin-top: 10px;
                    }
                }
            }

            :deep(h2) {
                font-family: 'DM Serif Display', serif;
                font-weight: 600;
                line-height: 1.3;
                letter-spacing: 0.05rem;
                @include r('font-size', 21, 30);
                @include r('margin-top', 20, 30);

                a {
                    text-decoration: none;
                    color: black;

                    &:hover {
                        color: var(--blue);
                    }
                }

                & + p {
                    @include r('margin-top', 5, 10);
                }
            }

            :deep(h3) {
                font-size: 18px;
                @include r('margin-top', 15, 20);

                a {
                    text-decoration: none;
                    color: black;

                    &:hover {
                        color: var(--blue);
                    }
                }

                & + p {
                    @include r('margin-top', 5, 10);
                }
            }

            :deep(p) {
                font-size: 17px;
                line-height: 1.6;
                color: #404040;
                text-wrap: balance;

                code {
                    background-color: #f4f4f4;
                    border-radius: 3px;
                    font-family: Inter, sans-serif;
                    color: black;
                    padding: 3px 5px;
                }

                strong {
                    font-weight: 600;
                    color: black;
                }

                a {
                    text-decoration: none;
                    color: var(--blue);

                    &:hover {
                        text-decoration: underline;
                    }

                    &.chapter-link {
                        background-color: rgba(var(--blue-rgb), 0.15);
                        padding: 3px 7px;
                        border-radius: 30px;
                        font-size: 13px;
                        font-weight: 600;
                        vertical-align: text-top;
                        color: rgba(var(--blue-rgb), 0.85);
                        transition: all 100ms $ease;

                        &:hover {
                            background-color: var(--blue);
                            color: white;
                            text-decoration: none
                        }
                    }
                }

                & + p {
                    @include r('margin-top', 10, 20);
                }
            }

            :deep(ol),
            :deep(ul) {
                li {
                    font-size: 17px;
                    line-height: 1.6;
                    color: #404040;

                    strong {
                        font-weight: 600;
                        color: black;
                    }

                    a {
                        text-decoration: none;
                        color: var(--blue);

                        &:hover {
                            text-decoration: underline;
                        }

                        &.chapter-link {
                            background-color: rgba(var(--blue-rgb), 0.15);
                            padding: 3px 7px;
                            border-radius: 30px;
                            font-size: 13px;
                            font-weight: 600;
                            vertical-align: text-top;
                            color: rgba(var(--blue-rgb), 0.85);
                            transition: all 100ms $ease;

                            &:hover {
                                background-color: var(--blue);
                                color: white;
                                text-decoration: none
                            }
                        }
                    }
                }
            }

            :deep(hr) {
                @include r('margin-top', 20, 40);
                border: none;
                height: 1px;
                background-color: black;
                opacity: 0.2;
            }
        }

        .pagination {
            display: flex;
            gap: 20px;
            justify-content: space-between;

            a {
                display: block;
                flex-basis: 0;
                flex-grow: 1;
                text-decoration: none;
                position: relative;
                transition: all 150ms $ease;
                padding: 10px 15px;
                border-radius: 10px;

                &.-previous {
                    margin-left: -15px;
                }

                &.-next {
                    text-align: right;
                    margin-right: -15px;
                }

                &:hover {
                    background-color: #F8F8F8;
                }
            }
        }
    }

    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: auto;
    }
}

</style>