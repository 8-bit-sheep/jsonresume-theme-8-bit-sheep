import ReactMarkdown from 'react-markdown';
import { formatDate } from '../helpers/date';
import { ResumeSchema } from '../schema';
import {
  Dates,
  List,
  ListItem,
  Section,
  SummaryDescription,
  TitleAndDate,
  WorkPosition,
} from './Work';

type Props = {
  projects: ResumeSchema['projects'];
};

export const Projects = ({ projects }: Props) => {
  if (!projects) return null;

  return (
    <Section>
      <h2>Projects</h2>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <TitleAndDate>
              {project.name && (
                <a href={project.url}>
                  <h3>{project.name}</h3>
                </a>
              )}
              {project.startDate && (
                <Dates>
                  {formatDate(project.startDate)}
                  {project.endDate && ` - ${formatDate(project.endDate)}`}
                </Dates>
              )}
            </TitleAndDate>
            <WorkPosition>{project.roles?.join(', ')}</WorkPosition>
            {project.description && (
              <SummaryDescription>
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </SummaryDescription>
            )}
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
