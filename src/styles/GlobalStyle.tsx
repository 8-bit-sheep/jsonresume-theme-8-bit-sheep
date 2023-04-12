import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  @page {
    margin: 32px
  }
`;
