import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';

import 'Languages/i18n';
import { GlobalStyles } from 'Styles/GlobalStyles';
import { store } from 'Store/store';
import { theme } from 'Styles/themes';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
