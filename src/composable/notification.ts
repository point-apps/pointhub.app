import { useNotification } from '@kyvg/vue3-notification'

export function useBaseNotification() {
  const { notify } = useNotification()

  const notification = (title: string, text: string, group?: string) => {
    notify({
      title: title,
      text: text,
      group: group,
    })
  }

  return { notification }
}
