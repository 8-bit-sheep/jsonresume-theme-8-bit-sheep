import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { formatDate } from '../helpers/date';
import { ResumeSchema } from '../schema';

interface Props {
  work: ResumeSchema['work'];
}

export const Work: FC<Props> = ({ work }) => {
  if (!work) return null;

  return (
    <Section>
      <h2>Work</h2>
      <List>
        {work.map((work, index) => (
          <ListItem key={index}>
            <TitleAndDate>
              <a href={work.url}>
                <h3>{work.name}</h3>
              </a>
              {work.startDate && (
                <Dates>
                  {formatDate(work.startDate)} -
                  {work.endDate && ` ${formatDate(work.endDate)}`}
                </Dates>
              )}
            </TitleAndDate>
            {work.position && <WorkPosition>{work.position}</WorkPosition>}
            {work.summary && (
              <SummaryDescription>
                <ReactMarkdown>{work.summary}</ReactMarkdown>
              </SummaryDescription>
            )}
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export const Section = styled.section`
  h2 {
    margin: 0;
    padding-top: 32px;
  }
  h3 {
    margin-top: 0;
  }
`;

export const List = styled.ul`
  margin-left: 8px;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 32px;
  break-inside: avoid;
`;

export const TitleAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  h3 {
    margin-bottom: 0;
  }
`;

export const Dates = styled.div`
  font-weight: 300;
`;

export const WorkPosition = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: #666;
`;

export const SummaryDescription = styled.div`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 300;
`;
