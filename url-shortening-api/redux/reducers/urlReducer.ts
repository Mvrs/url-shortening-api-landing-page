import { Action } from '../actions/action'

export interface UrlState {
  urls: string[]
}

export const initialState = {
  urls: [],
}

export const urlReducer = (state: UrlState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_URL': {
      return { ...state, urls: [...state.urls, action.payload] }
    }
    default:
      return state
  }
}
