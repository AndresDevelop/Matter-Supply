export function useLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const login = new URLSearchParams(window.location.search).get('code');
export const token = localStorage.getItem('token');
