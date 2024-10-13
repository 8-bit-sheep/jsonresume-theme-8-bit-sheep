import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import resume from '../resume.json';
import { ClientApp } from './ClientApp';

describe('<ClientApp />', () => {
  it('renders errors', () => {
    render(
      <ClientApp
        resume={{
          ...resume,
          basics: {
            ...resume.basics,
            url: '',
          },
        }}
      />,
    );
    expect(screen.getByText('resume.json is invalid')).toBeInTheDocument();
    expect(screen.getByText(/invalid_string/)).toBeInTheDocument();
  });

  it('renders resume', () => {
    render(<ClientApp resume={resume} />);
    expect(screen.getByText('Pässi Villanen')).toBeInTheDocument();
  });
});
