/*
  Attachments handling:
  - input_md: Markdown content is provided as a data URL.
*/
const ATTACHMENTS = {
  // Data URL containing Markdown content. This mirrors an uploaded attachment "input.md".
  input_md: "data:text/markdown;charset=utf-8,%23%20Markdown%20Input%0A%0AThis%20is%20a%20test%20of%20markdown%20input.%0A%0A```js%0Afunction%20greet(name)%20{%0A%20%20console.log(%22Hello,%20%22%20+%20name)%3B%0A}%0A```%0A%0A- Item%201%0A- Item%202%0A%0A**Bold%20text**%20and%20*italic*%2E"
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load Markdown from the attachment data URL
    const res = await fetch(ATTACHMENTS.input_md);
    const md = await res.text();
    // Convert to HTML using marked
    const html = marked.parse(md);
    const output = document.getElementById('markdown-output');
    output.innerHTML = html;
    // Highlight code blocks using highlight.js
    document.querySelectorAll('#markdown-output pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  } catch (err) {
    console.error(err);
  }
});
