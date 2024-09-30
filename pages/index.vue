<script lang="ts" setup>
const scrollPosition = ref(0)
const isMobile = ref(false)
const route = useRoute()
const searchActive = ref(false)
const showContents = ref(false)

useHead({
    title: 'Open Design Guide',
    meta: [
        {
            name: 'description',
            content: 'Open source software is designed by people just like you. Learn how to find your way around and contribute.'
        },
        {
            hid: 'og:image',
            property: 'og:image',
            content: '/images/preview.jpg'
        }
    ]
})

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

function handleScroll() {
    scrollPosition.value = window.scrollY
}

function detectMobile() {
    if(import.meta.client) {
        isMobile.value = window.matchMedia("(pointer: coarse)").matches
    }
}

detectMobile()

onMounted(() => {
    document.addEventListener('scroll', handleScroll)
    document.body.classList.remove('-search-active')
})

onBeforeUnmount(() => {
    document.removeEventListener('scroll', handleScroll)
})
</script>
<template>
    <div class="home-page">
        <header>
            <h1>Open Design Guide</h1>
            <p>Open source software is designed by people just like you. Learn how to find your way around and contribute.</p>

            <p class="-note">This is a total work-in-progress and the content is currently pretty much 100% AI generated and needs a ton of work. <a href="https://github.com/GBKS/opendesign.guide" target="_blank">File issues</a>, join our <a href="https://github.com/BitcoinDesign/Meta/issues?q=is%3Aissue+is%3Aopen+%22Open+Design+Guide%22" target="_blank">reading club</a>, and <a href="https://github.com/BitcoinDesign/Meta/issues/696" target="_blank">learn more</a>.</p>
        </header>
        <button
            :class="'content-toggle' + (showContents ? ' -active' : '')"
            :aria-selected="showContents"
            aria-label="Toggle content view"
            @click="showContents = !showContents"
        >
            <p>Covers</p>
            <p>Content</p>
        </button>
        <div class="page-cards">
            <ContentList
                v-if="!showContents"
                path="/" 
                v-slot="{ list }"
            >
                <PageCard
                    v-for="article in list" 
                    :key="article._path"
                    :info="article"
                    :scrollPosition="scrollPosition"
                    :isMobile="isMobile"
                />
            </ContentList>
            <ContentList
                v-if="showContents"
                path="/" 
                v-slot="{ list }"
            >
                <PageCardContent
                    v-for="article in list" 
                    :key="article._path"
                    :info="article"
                    :isMobile="isMobile"
                />
            </ContentList>
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
</template>

<style lang="scss" scoped>

.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 20px;
    gap: 50px;

    header {
        max-width: 980px;

        h1 {
            font-family: 'DM Serif Display', serif;
            text-align: center;
            line-height: 1.1;
            @include r('font-size', 48, 64);
        }

        p {
            margin-top: 10px;
            color: #808080;
            text-align: center;
            text-wrap: balance;
            @include r('font-size', 21, 24);

            &.-note {
                margin-top: 20px;
                color: #1CB3CB;
                @include r('font-size', 17, 19);
                font-weight: 600;

                a {
                    color: #1CB3CB;
                }
            }
        }
    }

    .content-toggle {
        display: flex;
        border-radius: 15px;
        background-color: #f8f8f8;
        cursor: pointer;
        transition: all 250ms $ease;

        p {
            font-weight: 600;
            color: #808080;
            @include r('font-size', 13, 15);
            padding: 5px 25px;

            &:first-child {
                background-color: #1CB3CB;
                color: white;
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
            }

            &:last-child {
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;

                &:hover {
                    color:#1CB3CB;
                }
            }
        }

        &.-active {
            p {
                &:first-child {
                    background-color: transparent;
                    color: #808080;

                    &:hover {
                        color:#1CB3CB;
                    }
                }

                &:last-child {
                    background-color: #1CB3CB;
                    color: white;
                }
            }
        }
    }
    
    .page-cards {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @include media-query(medium) {
        .page-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            max-width: 630px;
        }
    } 

    @include media-query(large) {
        .page-cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            max-width: 980px;
        }
    }    
}

</style>