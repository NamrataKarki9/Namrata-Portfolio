import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_URL?.trim() || '';
export const HAS_API = Boolean(API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL || undefined,
});

export default api;
