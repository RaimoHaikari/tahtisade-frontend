import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from 'styled-components';
import BasicTheme from './themes/theme.js'

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={BasicTheme}>
      <App />
    </ThemeProvider>
  </Provider>
,
  document.getElementById('root')
)
