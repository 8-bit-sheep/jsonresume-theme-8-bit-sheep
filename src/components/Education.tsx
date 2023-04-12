import { FC } from 'react';
import styled from 'styled-components';
import { formatDate } from '../helpers/date';
import { ResumeSchema } from '../schema';
import { Dates, List, ListItem, Section, TitleAndDate } from './Work';

interface Props {
  education: ResumeSchema['education'];
}

export const Education: FC<Props> = ({ education }) => {
  if (!education) return null;

  return (
    <Section>
      <h2>Education</h2>
      <List>
        {education.map((education, index) => (
          <ListItem key={index}>
            <TitleAndDate>
              {education.url ? (
                <a href={education.url}>
                  <h3>{education.institution}</h3>
                </a>
              ) : (
                <h3>{education.institution}</h3>
              )}
              {education.startDate && (
                <Dates>
                  {formatDate(education.startDate)}
                  {education.endDate && ` - ${formatDate(education.endDate)}`}
                </Dates>
              )}
            </TitleAndDate>
            {(education.studyType || education.area) && (
              <Description>
                {education.studyType && (
                  <StudyType>{education.studyType}</StudyType>
                )}
                {education.area && <p>{education.area}</p>}
              </Description>
            )}
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-size: 0.875rem;
  gap: 16px;
`;

const StudyType = styled.p`
  font-weight: bold;
`;
