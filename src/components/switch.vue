<template>
  <label class="inline-flex items-center gap-2" :class="{ 'flex-row-reverse ': labelPosition === 'right' }">
    <span>{{ label }}</span>
    <input v-model="modelValue" class="switch" type="checkbox" />
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: boolean
  label?: string
  labelPosition?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: '',
  labelPosition: 'left',
})

const label = ref(props.label)
const modelValue = ref(props.modelValue)
const labelPosition = ref(props.labelPosition)

const emit = defineEmits(['update:modelValue'])

watch(modelValue, (newLoaded) => {
  emit('update:modelValue', newLoaded)
})
</script>
