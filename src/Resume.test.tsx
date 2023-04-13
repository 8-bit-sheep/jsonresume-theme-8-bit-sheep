import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as resume from '../resume.json';
import { Resume } from './Resume';

describe('<Resume />', () => {
  it('renders without crashing', () => {
    render(<Resume resume={resume} />);
  });
});
