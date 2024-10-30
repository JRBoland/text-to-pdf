import React from 'react';

interface MarkdownEditorProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ markdown, setMarkdown }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="markdown-input" className="mb-2 font-semibold">
        Markdown Input
      </label>
      <textarea
        id="markdown-input"
        className="border rounded p-2 h-64 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your Markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor;