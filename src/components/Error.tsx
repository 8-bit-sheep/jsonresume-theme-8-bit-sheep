import { ZodError } from 'zod';
import { Layout } from './Layout';
import styled from 'styled-components';
import { FC } from 'react';

export const Error: FC<{ errors: ZodError }> = ({ errors }) => {
  return (
    <Layout>
      <h1>resume.json is invalid</h1>
      <List>
        {errors.errors.map((error) => (
          <ListItem key={error.path.join(', ')}>
            <h2>{error.message}</h2>
            <div>
              {error.code} at{' '}
              {error.path.map((error) => `"${error}"`).join(' > ')}
            </div>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-top: 48px;
  div {
    margin-left: 16px;
  }
`;
