import { url } from 'inspector'

export type Action = { type: 'ADD_URL'; payload: string }

export const addUrl = (url: string): Action => ({
  type: 'ADD_URL',
  payload: url,
})
