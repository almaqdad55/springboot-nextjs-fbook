import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import store from '../public/src/app/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
