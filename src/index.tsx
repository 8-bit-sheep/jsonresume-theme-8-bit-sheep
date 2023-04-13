import * as cheerio from 'cheerio';
import { readFileSync } from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Resume } from './Resume';
import { resumeSchema } from './schema';

export const render = (resume: unknown) => {
  const sheet = new ServerStyleSheet();
  try {
    const parsedResume = resumeSchema.parse(resume);
    const renderResult = renderToString(
      sheet.collectStyles(<Resume resume={parsedResume} />)
    );
    const styleTags = sheet.getStyleTags();
    const htmlFile = readFileSync(`${__dirname}/index.html`, 'utf8');
    const $ = cheerio.load(htmlFile);
    $('head>title').text(
      `${
        parsedResume.basics?.name ? `${parsedResume.basics.name} | ` : ''
      }8-bit-sheep`
    );
    $('head').append(styleTags);
    $('#root').remove();
    $('body>script').remove();
    $('body').append(renderResult);
    return $.html();
  } catch (e) {
    console.error(e);
  } finally {
    sheet.seal();
  }
};
