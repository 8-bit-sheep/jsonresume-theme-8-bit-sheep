import { render, screen } from '@testing-library/react';
import React from 'react';
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
});
