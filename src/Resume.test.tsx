import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import * as resume from '../resume.json';
import { Resume } from './Resume';

describe('<Resume />', () => {
  it('renders without crashing', () => {
    render(<Resume resume={resume} />);
  });
});
