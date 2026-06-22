import request from '@/api/core/request'
export const login = (email, password) => request.post('/auth/login', { email, password })
export const register = (email, password, name) => request.post('/auth/register', { email, password, name })
export const logout = () => request.post('/auth/logout')
