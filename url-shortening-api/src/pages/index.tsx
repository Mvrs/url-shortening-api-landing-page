import Head from 'next/head'
// import '../../sass/pages/home.scss';
import Nav from '../components/nav'
import Header from '../components/header'
import Layout from '../components/layout'
import Branding from '../components/branding'
import Boost from '../components/boost'
import Footer from '../components/footer'
import URLForm from '../components/url-shortener'

import { useDispatch } from 'react-redux'
import { addUrl } from '../../redux/actions/action'

export default function Home() {
  const dispatch = useDispatch()

  const onAddUrl = (url: string) => {
    dispatch(addUrl(url))
  }

  return (
    <Layout>
      <Head>
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../images/favicon-32x32.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Header />
      <URLForm addUrl={onAddUrl} />
      <Branding />
      <Boost />
      <Footer />
    </Layout>
  )
}
