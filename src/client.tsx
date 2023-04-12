import React from 'react';
import ReactDOM from 'react-dom/client';
import resume from '../resume.json';
import { Resume } from './Resume';
import { resumeSchema } from './schema';

const App = () => {
  const parsedResume = resumeSchema.parse(resume);
  return (
    <React.StrictMode>
      <Resume resume={parsedResume} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
