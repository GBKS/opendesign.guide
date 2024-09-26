<script lang="ts" setup>
</script>

<template>
    <div class="table-of-contents-page" :style="styleObject">
        <div class="content">
            <h1>Table of contents</h1>
            <div class="chapters">
                <ContentList path="/" v-slot="{ list }">
                    <div 
                        v-for="article in list" 
                        :key="article._path" 
                        class="chapter"
                    >
                        <p>{{ article.chapter }}</p>
                        <h2>
                            <NuxtLink
                                :to="article._path"
                            >{{ article.title }}</NuxtLink>
                        </h2>
                        <template v-for="item in article.body.children">
                            <NuxtLink
                                :to="article._path + '/#' + item.props.id" 
                                :class="'-' + item.tag" 
                                v-if="item.tag == 'h2' || item.tag == 'h3'"
                            >{{ item.children[0].value }}</NuxtLink>
                        </template>
                    </div>
                </ContentList>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.table-of-contents-page {
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
        max-width: 1100px;
        box-sizing: border-box;
        border-radius: 15px;
        background-color: white;
        @include r('padding', 20, 70);

        h1 {
            font-family: 'DM Serif Display', serif;
            line-height: 1.1;
            letter-spacing: 0;
            @include r('font-size', 32, 40);
        }

        .chapters {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;

            .chapter {
                flex-basis: 250px;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: stretch;

                > p {
                    font-weight: 600;
                }

                h2 {
                    font-family: 'DM Serif Display', serif;
                    font-weight: 600;
                    line-height: 1.3;
                    letter-spacing: 0.05rem;
                    @include r('font-size', 21, 24);

                    a {
                        text-decoration: none;
                        color: black;
                        transition: all 100ms $ease;

                        &:hover {
                            color: var(--primary);
                        }
                    }

                    & + a {
                        margin-top: 10px;
                    }
                }

                > a {
                    font-weight: 400;
                    line-height: 1.3;
                    @include r('font-size', 21, 15);
                    text-decoration: none;
                    color: black;
                    transition: all 100ms $ease;

                    &.-h2 {
                        padding: 5px 0;
                        line-height: 1.4;
                    }

                    &.-h3 {
                        display: none;
                        @include r('font-size', 21, 15);
                        @include r('padding-left', 10, 20);
                    }


                    &:hover {
                        color: var(--primary);
                    }
                }
            }
        }
    }
}

</style>