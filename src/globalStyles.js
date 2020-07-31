import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
    --color-text: ${({ theme }) => theme.text};
    --color-lightText: ${({ theme }) => theme.lightText};
    --color-background: ${({ theme }) => theme.body};
    --color-primary: ${({ theme }) => theme.primary};
    --color-animation: ${({ theme }) => theme.animation};
    --color-shadow: ${({ theme }) => theme.shadow};
    --color-yellow: #fcbf1e;
    --color-blue: #0367BD;
    --color-lightBlue: ${({ theme }) => theme.blue};
    --opacity: ${({ theme }) => theme.opacity};
    --header-shadow: ${({ theme }) => theme.header};
    --menu: ${({ theme }) => theme.menu};
  }
  body {
    background-color: var(--color-background);
  }
  `