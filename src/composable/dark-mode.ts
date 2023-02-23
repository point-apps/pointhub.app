export function useDarkMode() {
  // set default dark-mode to light
  if (!localStorage.getItem('dark-mode')) {
    localStorage.setItem('dark-mode', 'light')
  }

  if (
    localStorage.getItem('dark-mode') === 'dark' ||
    (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
