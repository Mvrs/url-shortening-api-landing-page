import Head from 'next/head';
// import '../../sass/pages/home.scss';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon-32x32.png"
        />
      </Head>
      <Nav />
      <h1 className="super-color"> Hello I'm super color</h1>
    </div>
  );
}
