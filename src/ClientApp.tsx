import { FC, StrictMode } from 'react';
import { Resume } from './Resume';
import { Error } from './components/Error';
import { resumeSchema } from './schema';

export const ClientApp: FC<{ resume: unknown }> = ({ resume }) => {
  const parsedResume = resumeSchema.safeParse(resume);
  return (
    <StrictMode>
      {parsedResume.success ? (
        <Resume resume={parsedResume.data} />
      ) : (
        <Error errors={parsedResume.error} />
      )}
    </StrictMode>
  );
};
