import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Work } from './Work';

describe('<Work />', () => {
  it('renders nothing if no work info', () => {
    const { container } = render(<Work work={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders education info', async () => {
    render(
      <Work
        work={[
          {
            name: 'Workplace',
            description:
              'Worked at a *workplace*, but got fired for being too good at it.',
            startDate: '2018-09-01',
            endDate: '2018-09-02',
            position: 'CEO',
            url: 'https://www.workplace.com',
          },
        ]}
      />
    );
    expect(screen.getByText('Workplace')).toBeInTheDocument();
    expect(screen.getByText('Workplace').parentElement?.tagName).toBe('A');
    expect(screen.getByText('CEO')).toBeInTheDocument();
    expect(
      screen.getByText('September 2018 - September 2018')
    ).toBeInTheDocument();
  });

  it('renders with minimal info', () => {
    render(
      <Work
        work={[
          {
            name: 'Workplace',
          },
        ]}
      />
    );
    expect(screen.getByText('Workplace')).toBeInTheDocument();
  });
});
