import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 794px;
  padding: 16px;

  a {
    color: initial;
  }
`;
