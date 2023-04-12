import { beautifyUrl } from './url';
import { expect, describe, it } from 'vitest';

describe('url', () => {
  it('beautifies the url', () => {
    expect(beautifyUrl('')).toBe('');
    expect(beautifyUrl('https://8-bit-sheep.com')).toBe('8-bit-sheep.com');
    expect(beautifyUrl('http://8-bit-sheep.com')).toBe('8-bit-sheep.com');
    expect(beautifyUrl('https://cv.8-bit-sheep.com/html/')).toBe(
      'cv.8-bit-sheep.com/html'
    );
  });
});
