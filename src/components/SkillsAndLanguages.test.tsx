import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { SkillsAndLanguages } from './SkillsAndLanguages';

describe('<SkillsAndLanguages />', () => {
  it('orders skills based on the amount of keywords', () => {
    render(
      <SkillsAndLanguages
        skills={[
          {
            name: 'B',
            keywords: ['a', 'b'],
          },
          {
            name: 'A',
            keywords: ['a', 'b', 'c'],
          },
          { name: 'C' },
          { name: 'D' },
          {},
        ]}
        languages={[]}
      />
    );
    expect(screen.getAllByRole('listitem')[0].textContent).toBe('Aabc');
    expect(screen.getAllByRole('listitem')[1].textContent).toBe('Bab');
  });

  it('renders languages', () => {
    render(
      <SkillsAndLanguages
        skills={[]}
        languages={[
          { language: 'English', fluency: 'Native' },
          { language: 'Spanish', fluency: 'Fluent' },
        ]}
      />
    );
    expect(screen.getAllByRole('listitem')[0].textContent).toBe(
      'EnglishNative'
    );
    expect(screen.getAllByRole('listitem')[1].textContent).toBe(
      'SpanishFluent'
    );
  });
});
