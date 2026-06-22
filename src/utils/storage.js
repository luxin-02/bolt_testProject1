export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const getItem = (key, def = null) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def } catch { return def } }
export const removeItem = (key) => localStorage.removeItem(key)
