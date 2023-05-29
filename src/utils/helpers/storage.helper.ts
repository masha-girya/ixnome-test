export function setLocalItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getLocalItem(key: string) {
  const token = JSON.parse(localStorage.getItem(key) || '[]');

  return token;
}

export function removeLocalItems(keys: string[]) {
  keys.forEach((key) => localStorage.removeItem(key));
}
