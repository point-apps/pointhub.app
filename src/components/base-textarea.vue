<template>
  <textarea
    ref="textarea"
    v-model="modelValue"
    rows="1"
    class="form-input overflow-hidden outline-none pt-2 pb-10"
    type="text"
    style="resize: none"
    @keydown="resize()"
  />
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

export interface Props {
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const textarea = ref()

const resize = () => {
  console.log(textarea.value.scrollHeight)
  textarea.value.style.height = `${textarea.value.scrollHeight}px`
}

const modelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(modelValue, (newData) => {
  nextTick(() => {
    modelValue.value = newData
    resize()
    emit('update:modelValue', newData)
  })
})

watch(props, (newData) => {
  modelValue.value = newData.modelValue
  nextTick(() => {
    resize()
  })
  emit('update:modelValue', newData.modelValue)
})
</script>
