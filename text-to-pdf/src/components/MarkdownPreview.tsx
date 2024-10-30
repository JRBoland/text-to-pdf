import React from 'react';
import { marked } from 'marked';
import type { MarkedOptions } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; 

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(markdown, {
      breaks: true,
      gfm: true,
      commonmark: true,
      langPrefix: 'hljs language-',
      highlight: function(code: string, lang: string) {   
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    } as MarkedOptions);
    return { __html: rawMarkup };
  };

  return (
    <div className="flex flex-col my-4">
      <label className="mb-2 font-semibold">Preview</label>
      <div className="border">
        <div
          id="markdown-preview"
          className="p-4 overflow-auto prose max-w-none min-h-[20rem] mx-auto bg-white"
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  );
};

export default MarkdownPreview;