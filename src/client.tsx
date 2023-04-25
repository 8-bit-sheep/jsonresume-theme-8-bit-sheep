import ReactDOM from 'react-dom/client';
import resume from '../resume.json';
import { ClientApp } from './ClientApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ClientApp resume={resume} />
);
