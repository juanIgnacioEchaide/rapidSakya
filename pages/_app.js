import '../styles/globals.css'
import Layout from '../UI/organism/layout/layout';
import useMedia from '../utils/useMedia';
import { pass, user} from '../utils/secured_constants';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: 'mongodb+srv://'+user+':'+pass+'@cluster0.duiue.mongodb.net/haozi',
    cache: new InMemoryCache()
  });

  const size = useMedia();
    
  return (
        <ApolloProvider client={client}>
          <Layout size={size}>
            <Component {...pageProps}/>
          </Layout>
        </ApolloProvider>)
}

export default MyApp
