import * as cheerio from 'cheerio';
import { readFileSync } from 'fs';
import { vi } from 'vitest';
import resume from '../resume.json';
import { render } from './index';

vi.mock('fs', async () => {
  const actual = await vi.importActual<typeof import('fs')>('fs');

  return {
    ...actual,
    readFileSync: vi.fn(
      () => `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>8-bit-sheep</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/client.tsx"></script>
      </body>
    </html>
    `
    ),
  };
});

describe('index', () => {
  it('renders the html with styles', () => {
    const html = render(resume);
    expect(html).toContain('<style');
  });

  it('sets the document title', () => {
    const html = render(resume);
    if (!html) throw new Error('html is undefined');
    const $ = cheerio.load(html);
    expect($('head > title').html()).toEqual('Pässi Villanen | 8-bit-sheep');
  });

  it('sets the document title for CV without basics.name', () => {
    const html = render({ ...resume, basics: { ...resume.basics, name: '' } });
    if (!html) throw new Error('html is undefined');
    const $ = cheerio.load(html);
    expect($('head > title').html()).toEqual('8-bit-sheep');
  });

  it('handles error', async () => {
    console.error = vi.fn();
    vi.mocked(readFileSync).mockImplementation(() => {
      throw new Error('oops');
    });
    try {
      render(resume);
    } catch (e) {
      expect((e as Error).message).toEqual('oops');
    }
  });
});
