<script lang="ts" setup>
const expanded = ref(false)

function toggle(event: any) {
  expanded.value = event.target.open
}
</script>
<template>
  <details @toggle="toggle" class="resources">
    <summary>{{ expanded ? 'Hide resources' : 'View resources' }}</summary>
    <div class="content">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </details>
</template>
<style lang="scss" scoped>

.resources {
  border-radius: 15px;
  background-color: rgba(var(--brown-rgb), 0.05);
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  summary {
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    color: var(--brown);
    opacity: 0.75;
    text-align: left;
    padding: 10px 15px;

    &::marker {
      content: '';
    }

    &:hover {
      opacity: 1;
    }
  }

  .content {
    padding: 10px 15px;
    border-top: 1px solid white;

    :deep(ul),
    :deep(ol) {
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 20px;

      li {
        font-size: 15px !important;
      }
    }
  }
}

</style>