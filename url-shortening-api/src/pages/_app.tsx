// import '../../styles/globals.css';
import '../../sass/main.scss';

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          @font-face {
            font-family: 'Poppins';
            src: url('../../public/fonts/Poppins-Regular.ttf');
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
