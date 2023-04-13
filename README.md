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

The theme uses React, styled-components, and Vite. The build is ran with `esbuild` and the build can be found under `./dist`

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

### Tests

Unit tests can be run with `npm run test`. Tests are written with `vitest`.

### Linting

The code style follows some basic recommendations in conjunction with prettier. To perform linting run `npm run lint`.

### CI

[./.github/workflows/ci.yaml](./.github/workflows/ci.yaml) defines a CI pipeline that runs the build, linting, tests, and CV builds to assert that everything is working.

## Publish new version

- Make sure you are in the `main`-branch and that the new changes that you want to publish have been merged there
- Run `npm version <major|minor|patch>` depending on what kind of changes have been made.
- Run `npm publish`. This will run the build and publish the contents of `./dist`.
- Push the new commit directly to main with `git push`
- Push the new tag created by `npm publish` by running `git push origin <new_version>`
- Go to <https://github.com/8-bit-sheep/jsonresume-theme-8-bit-sheep/releases> and click "Draft a new release".
  - Select the new tag that you just pushed and click "Generate release notes".
  - Publish the release
