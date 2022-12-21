import { useState } from 'react';
import AppContext from '../lib/appContext';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  return (
    <AnimatePresence>
      <AppContext.Provider
        value={{
          mobileMenuVisibility,
          setMobileMenuVisibility,
        }}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </AppContext.Provider>
    </AnimatePresence>
  );
}

export default MyApp;
