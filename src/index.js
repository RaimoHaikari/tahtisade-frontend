import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

import { ThemeProvider } from 'styled-components';
import BasicTheme from './themes/theme.js'

let backendUrl = 'https://infinite-depths-50039.herokuapp.com/';
//backendUrl = 'http://localhost:3001';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: backendUrl
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={BasicTheme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)