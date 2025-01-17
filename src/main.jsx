import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import { SignIn } from './pages/Signin';
import { SignUp } from './pages/Signup';
import { Home } from './pages/Home';
import GlobalStyles from '../styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
