import './../styles/global.scss';
import './../styles/_colors.scss';

import { useRouter } from 'next/router';

import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = url => {
      setLoading(false);

      (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    function handleRouteChangeStart(){
      setLoading(true);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeStart',handleRouteChangeStart);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeStart', handleRouteChangeStart);
    }
  }, [router.events])

  return (
    <>
      {loading ? <LinearProgress style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999
      }} /> : ''}
      <Component {...pageProps} />
    </>
  )
}


export default MyApp;
