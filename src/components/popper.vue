<template>
  <component :is="Popper" v-bind="$attrs" :placement="props.placement">
    <slot />
    <template #content="contentProps">
      <slot name="content" v-bind="contentProps" />
    </template>
  </component>
</template>

<script setup lang="ts">
import Popper from 'vue3-popper'
import { type PropType } from 'vue'

const props = defineProps({
  placement: {
    type: String,
    required: false,
    default: 'bottom',
  },
})

// const props = withDefaults(defineProps<Props>(), {
//   placement: '',
// })
</script>
