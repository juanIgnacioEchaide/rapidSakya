import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux'; 

import Layout from '../UI/organism/layout/layout';
import useMedia from '../utils/useMedia';
import { pass, user} from '../utils/secured_constants';
import store from '../store/configureStore';



function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

  const size = useMedia();
    
  return (
        <ReduxProvider store={ store }>
          <ApolloProvider client={ client }>
            <Layout size={ size }>
              <Component { ...pageProps }/>
            </Layout>
          </ApolloProvider>
        </ReduxProvider>)
}

export default MyApp
