import { FC } from 'react';
import { Education } from './components/Education';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Projects } from './components/Projects';
import { SkillsAndLanguages } from './components/SkillsAndLanguages';
import { Work } from './components/Work';
import { ResumeSchema } from './schema';
import { GlobalStyle } from './styles/GlobalStyle';

interface Props {
  resume: ResumeSchema;
}

export const Resume: FC<Props> = ({ resume }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Header basics={resume.basics} />
      <Work work={resume.work} />
      <Projects projects={resume.projects} />
      <SkillsAndLanguages skills={resume.skills} languages={resume.languages} />
      <Education education={resume.education} />
    </Layout>
  );
};
