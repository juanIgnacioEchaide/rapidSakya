import '../styles/globals.css'
import Layout from '../UI/organism/layout/layout';
import useMedia from '../utils/useMedia';
import { pass, user} from '../utils/secured_constants';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

 client
    .query({
      query: gql`
      query getPromos{
        menues{
          id
          price
          description
          name
        }
      }
      `
    })
    .then(result => console.log(result));

  const size = useMedia();
    
  return (
        <ApolloProvider client={client}>
          <Layout size={size}>
            <Component {...pageProps}/>
          </Layout>
        </ApolloProvider>)
}

export default MyApp
