import '../styles/globals.css'
import Layout from '../UI/organism/layout/layout';
import useMedia from '../utils/useMedia';

function MyApp({ Component, pageProps }) {
  
  const size = useMedia();
    
  return (<Layout size={size}>
            <Component {...pageProps}/>
         </Layout>)
}

export default MyApp
