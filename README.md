# jsonresume-theme-8-bit-sheep

The 8-bit-sheep JSON Resume theme.

This theme follows the [JSON Resume](https://jsonresume.org/) schema found at <https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json>.

## Installation

You can add the theme to your resume by installing it with some of the following commands

```bash
npm i jsonresume-theme-8-bit-sheep
yarn add jsonresume-theme-8-bit-sheep
pnpm i jsonresume-theme-8-bit-sheep
```

## Usage

```bash
resume export resume.html --theme 8-bit-sheep
resume export resume.pdf --theme 8-bit-sheep
```

## Local development of the theme

### Requirements

- node.js
- npm

### Steps

- Run `npm install`
- Start dev server with `npm run dev`. This starts a dev server on one of you localhost ports with help of Vite. The site is using `resume.json` as the source of information for the CV.

### Local build

- Run `npm run build` which will generate the JS build into `./dist`
- Run `npm run create-example-html` to generate the HTML build to `./build/html/example.html`
- Run `npm run create-example-pdf` to generate the PDF build to `./build/pdf/example.pdf`
