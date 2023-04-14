import { FC } from 'react';
import { ResumeSchema } from '../schema';
import { List, ListItem, Section } from './Work';

type Props = {
  interests: ResumeSchema['interests'];
};

export const Interests: FC<Props> = ({ interests }) => {
  if (!interests || interests.length === 0) return null;

  return (
    <Section>
      <h2>Interests</h2>
      <List>
        {interests.map(({ keywords, name }) => (
          <ListItem key={name}>
            <h3>{name}</h3>
            <p>{keywords?.join(', ')}</p>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
