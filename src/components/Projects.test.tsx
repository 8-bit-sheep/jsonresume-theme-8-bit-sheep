import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from './Projects';

describe('<Projects />', () => {
  it('renders summary as markdown', () => {
    render(
      <Projects
        projects={[
          {
            name: 'Awesome Things',
            description: '*Markdown* should work',
          },
        ]}
      />
    );
    expect(screen.getByText(/Markdown/).tagName).toBe('EM');
  });

  it('empty renders if no projects', () => {
    const { container } = render(<Projects projects={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('empty render if projects length is 0', () => {
    const { container } = render(<Projects projects={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
