<template>
  <div class="relative">
    <input ref="dateRef" v-model.lazy="nativeDate" type="date" class="form-input absolute -z-50" />
    <button type="button" class="absolute right-0 px-4 py-2" @click="onClickDateRef()">
      <fa-icon icon="fa-regular fa-calendar" class=""></fa-icon>
    </button>
    <input
      v-model.lazy="modelValue"
      v-cleave="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
      type="text"
      class="form-input"
      placeholder="DD-MM-YYYY"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { format } from 'date-fns'

export interface Props {
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const modelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(props, (newData) => {
  modelValue.value = newData.modelValue
  emit('update:modelValue', newData.modelValue)
})
watch(modelValue, (newData) => {
  emit('update:modelValue', newData)
})

/**
 * HTMLInputElement.showPicker()
 *
 * This is the same picker that would normally be displayed when the element
 * is selected, but can be triggered from a button press or other user interaction.
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker
 */
const dateRef = ref()
const onClickDateRef = () => {
  dateRef.value.showPicker()
}

const nativeDate = ref()
watch(nativeDate, (newValue) => {
  modelValue.value = format(new Date(newValue), 'dd-MM-yyyy')
  emit('update:modelValue', modelValue.value)
})
</script>
