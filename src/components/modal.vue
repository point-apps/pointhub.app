<template>
  <div v-if="isOpen" class="modal-dialog">
    <!-- Modal Backdrop  -->
    <div class="modal-backdrop" @click="isOpen = false"></div>
    <!-- Modal Container -->
    <div class="modal-container">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const isOpen = ref(props.isOpen)

const emit = defineEmits(['onClose'])

watch(isOpen, (newData) => {
  if (newData === false) {
    emit('onClose')
  }
})

watch(props, () => {
  isOpen.value = props.isOpen
})
</script>
