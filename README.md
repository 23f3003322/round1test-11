# Markdown to HTML Demo (GitHub Pages)

A small static site that loads a Markdown document from an attachment, converts it to HTML using Marked, renders it inside the #markdown-output element, and applies syntax highlighting with Highlight.js.

## Project summary
- The site demonstrates a lightweight, client-side Markdown toolchain suitable for GitHub Pages.
- It uses data URLs for attachments (e.g., input.md) and fetches their content at runtime.
- Code blocks are highlighted automatically after rendering.

## Setup (GitHub Pages)
1. Create a new repository (e.g., your-username.github.io/markdown-demo).
2. Push the repository with the following files (index.html, css/styles.css, js/main.js, README.md).
3. In GitHub, go to Settings > Pages and set the source to the main branch (root) or /docs if you place files there. Save.
4. Wait a minute for GitHub Pages to deploy. Your site will be available at https://your-username.github.io/markdown-demo/

## Usage
- Open the deployed page. You will see a Markdown header and content rendered inside the page.
- The content is loaded from an attachment data URL defined in code (input_md) and converted to HTML with Marked.
- Code blocks are highlighted using Highlight.js.

## Key code files
- index.html: Page structure and script/style includes. It loads Marked and Highlight.js from CDNs.
- css/styles.css: Minimal styles to improve readability.
- js/main.js: Main logic. Defines the attachment data URL, fetches it, converts Markdown to HTML, and applies syntax highlighting.
- README.md: This file with project information.

## License
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
