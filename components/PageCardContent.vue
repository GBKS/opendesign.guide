<script lang="ts" setup>

const props = defineProps([
  'info',
  'showContents'
])

</script>

<template>
  <div
    class="page-card-content"
    :key="info._path"
  >
    <div class="copy" data-color>
      <p>{{ info.chapter }}</p>
      <h2>
        <NuxtLink
          :to="info._path"
        >{{ info.title }}</NuxtLink>
      </h2>
      <div class="contents">
        <template v-for="item in info.body.children">
          <NuxtLink
            v-if="item.tag == 'h2'"
            :to="info._path + '/#' + item.props.id" 
            :class="'-' + item.tag" 
          >{{ item.children[0].value }}</NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.page-card-content {
  position: relative;
  text-decoration: none;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f8f8f8;
  display: block;
  transition: all 250ms $ease;

  .copy {
    position: relative;
    padding: 20px;

    p {
      font-size: 15px;
      font-weight: 600;
    }

    h2 {
      margin-top: 2px;
      font-size: 27px;
      line-height: 1.2;
      font-weight: 600;

      a {
        color: black;
        text-decoration: none;
        transition: all 100ms $ease;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .contents {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    a {
      font-weight: 400;
      line-height: 1.3;
      text-decoration: none;
      color: black;
      transition: all 100ms $ease;
      @include r('font-size', 21, 15);

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

</style>