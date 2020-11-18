import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { urlReducer } from './redux/reducers/urlReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState } from './redux/reducers/urlReducer'

let store: any

function initStore(preloadedState = initialState) {
  return createStore(
    urlReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  )
}

export const intializeStore = preloadedState => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => intializeStore(initialState), [initialState])
  return store
}
