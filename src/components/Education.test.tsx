import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Education } from './Education';
import '@testing-library/jest-dom';

describe('<Education />', () => {
  it('renders nothing if no education info', () => {
    const { container } = render(<Education education={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders education info', () => {
    const { getByText } = render(
      <Education
        education={[
          {
            studyType: 'BSc',
            url: 'https://www.university-of-life.com',
            institution: 'University of Life',
            area: 'Computer Science',
            startDate: '2018-09-01',
            endDate: '2021-06-01',
          },
        ]}
      />
    );
    expect(getByText('BSc')).toBeInTheDocument();
    expect(getByText('University of Life')).toBeInTheDocument();
    expect(getByText('September 2018 - June 2021')).toBeInTheDocument();
  });

  it('renders with minimal info', () => {
    const { getByText } = render(
      <Education
        education={[
          {
            institution: 'University of Life',
          },
        ]}
      />
    );
    expect(getByText('University of Life')).toBeInTheDocument();
  });
});
