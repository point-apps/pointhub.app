import { useAuthStore } from '@/stores/auth'

export function useAuth() {
  const authStore = useAuthStore()

  const isAuthenticated = () => {
    return false
  }
}
