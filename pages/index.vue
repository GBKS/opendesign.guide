<template>
    <div class="home-page">
        <header>
            <h1>Open Design Guide</h1>
            <p>Open source software is designed by people just like you. Learn how to find your way around and contribute.</p>

            <p class="-note">This is a total work-in-progress and the content is currently pretty much 100% AI generated and needs a ton of work. <a href="https://github.com/BitcoinDesign/Meta/issues/696" target="_blank">Learn more</a>.</p>
        </header>
        <div class="page-cards">
            <ContentList path="/" v-slot="{ list }">
                <PageCard
                    v-for="article in list" 
                    :key="article._path"
                    :info="article"
                />
            </ContentList>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 20px;
    gap: 75px;

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
                color: #859B63;
                @include r('font-size', 17, 19);
                font-weight: 600;

                a {
                    color: #859B63;
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