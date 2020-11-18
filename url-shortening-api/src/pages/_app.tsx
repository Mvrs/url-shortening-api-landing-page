import '../../sass/main.scss'
import { Provider } from 'react-redux'
import { useStore } from '../../store'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
