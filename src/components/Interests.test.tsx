import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Interests } from './Interests';

describe('<Interests />', () => {
  it('should render the interests section', () => {
    render(
      <Interests
        interests={[
          {
            name: 'Sheep Farming',
            keywords: ['Breeding', 'Fleece Production', 'Lambing', 'Shearing'],
          },
        ]}
      />,
    );
    expect(
      screen.getByText('Breeding, Fleece Production, Lambing, Shearing'),
    ).toBeInTheDocument();
  });

  it('should render the interests section with no keywords', () => {
    render(
      <Interests
        interests={[
          {
            name: 'Sheep Farming',
            keywords: [],
          },
        ]}
      />,
    );
    expect(screen.getByText('Sheep Farming')).toBeInTheDocument();
  });

  it('should empty render if interests length is zero', () => {
    const { container } = render(<Interests interests={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should empty render if no interests', () => {
    const { container } = render(<Interests interests={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
