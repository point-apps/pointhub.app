<template>
  <popper placement="bottom-start" class="!block" :show="isShow">
    <label class="input-group">
      <input
        v-model="modelValue"
        type="text"
        class="form-input"
        :placeholder="props.placeholder"
        @focus="isShow = true"
        @blur="onBlur()"
      />
    </label>
    <template #content>
      <slot>
        <div
          class="border-slate-100 dark:border-slate-800 dark:bg-slate-700 mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg bg-white sm:m-0 sm:w-[768px]"
        >
          <div v-if="isLoading" class="p-4">Loading ...</div>
          <div v-if="!isLoading && options.length === 0" class="p-4">Datax not found</div>
          <ul v-if="!isLoading && options.length > 0" class="my-2">
            <li v-for="option in options" :key="option.label">
              <button
                type="button"
                class="dark:hover:bg-slate-600 dark:focus:bg-slate-600 flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 w-full text-left"
                @click="choose(option.name)"
              >
                <p class="dark:text-slate-100 text-slate-700 line-clamp-2">{{ option.name }}</p>
              </button>
            </li>
          </ul>
        </div>
      </slot>
    </template>
  </popper>
</template>

<script setup lang="ts">
import axios from '@/axios'
import { onMounted, ref, watch } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { useApi as useRoleApi } from '@/modules/role/composable/api'

export interface OptionInterface {
  value: string
  label: string
}

const props = defineProps<{
  modelValue: string
  placeholder?: string
  options: OptionInterface[]
}>()

const modelValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue', 'blur'])

watch(modelValue, (newData) => {
  console.log(newData)
  emit('update:modelValue', newData)
})

watch(props.options, (newData) => {
  console.log(newData)
})

const optionApi = useRoleApi()
const isShow = ref(false)
const selected = ref()
const data = ref([])
const searchText = ref('')
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  // const result = await readAllRole()
  // data.value = result.data
  isLoading.value = false
})

const latestSelectedRole = ref()

const onBlur = () => {
  emit('blur')
  isShow.value = false
}

const choose = (text: string) => {
  isShow.value = false
}
</script>
