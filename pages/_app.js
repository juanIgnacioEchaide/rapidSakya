import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux'; 
import Layout from '../UI/organism/layout/layout';
import useMedia from '../utils/useMedia';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

  const size = useMedia();
    
  return (
          <ApolloProvider client={ client }>
            <Layout size={ size }>
              <Component { ...pageProps }/>
            </Layout>
          </ApolloProvider>
       )
}

export default MyApp
