import { useState } from 'react';
import AppContext from '../lib/appContext';
import '../styles/globals.css';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(true);

  return (
    <AppContext.Provider
      value={{
        mobileMenuVisibility,
        setMobileMenuVisibility,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
