import { FC } from 'react';
import styled from 'styled-components';
import { ResumeSchema } from '../schema';

type Props = {
  skills: ResumeSchema['skills'];
  languages: ResumeSchema['languages'];
};

export const SkillsAndLanguages: FC<Props> = ({ skills, languages }) => {
  return (
    <Section>
      {skills && (
        <BreakContainer>
          <h2>Skills</h2>
          <SkillList>
            {[...skills]
              ?.sort(
                (a, b) => (b.keywords?.length ?? 0) - (a.keywords?.length ?? 0)
              )
              ?.map((skill, index) => (
                <ListItem key={index}>
                  <Category>{skill.name}</Category>
                  {skill.keywords?.map((keyword, index) => (
                    <Details key={index}>{keyword}</Details>
                  ))}
                </ListItem>
              ))}
          </SkillList>
        </BreakContainer>
      )}
      {languages && (
        <BreakContainer>
          <h2>Languages</h2>
          <LanguageList>
            {languages.map(({ fluency, language }, index) => (
              <LanguageListItem key={index}>
                <Category>{language}</Category>
                <Details>{fluency}</Details>
              </LanguageListItem>
            ))}
          </LanguageList>
        </BreakContainer>
      )}
    </Section>
  );
};

const Section = styled.section`
  h2 {
    margin: 0;
    padding-top: 32px;
  }
`;

const BreakContainer = styled.div`
  break-inside: avoid;
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin-left: 8px;
  gap: 8px;
  padding: 0;
`;

const ListItem = styled.li`
  border: 0.5px solid #ddd;
  list-style: none;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
`;

const LanguageList = styled.ul`
  display: flex;
  padding: 0;
  margin-left: 8px;
  gap: 16px;
`;

const LanguageListItem = styled.li`
  list-style: none;
`;

const Category = styled.div`
  font-weight: 700;
  margin-bottom: 8px;
`;

const Details = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
`;
