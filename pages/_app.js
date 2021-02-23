import '../styles/globals.css'
import Layout from '../UI/organism/layout/layout';
import useMedia from '../utils/useMedia';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { pass, user} from '../utils/secured_constants';

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri:'mongodb+srv://'+user+':'+pass+'@cluster0.duiue.mongodb.net/haozi'  
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
