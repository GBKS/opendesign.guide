<script lang="ts" setup>
const props = defineProps([
  'content'
])
</script>

<template>
  <div class="table-of-contents">
    <h4>On this page</h4>
    <ol>
      <li
        v-for="item in content"
        :key="item.props.id"
      >
        <NuxtLink
          :to="'#' + item.props.id"
        >{{ item.children[0].value }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>

.table-of-contents {
  padding: 30px 0 0 0;

  h4 {
    font-size: 17px;
  }

  ol {
    margin-top: 10px;
    padding-left: 20px;

    li {
      a {
        font-size: 15px;
        color: #404040;
        text-decoration: none;
        padding: 3px 0;

        &:hover {
          color: black;
          text-decoration: underline
        }
      }
    }
  }
}

</style>