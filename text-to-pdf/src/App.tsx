import React, { useState } from 'react'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'
import DownloadButton from './components/DownloadButton'

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(`# How to use this tool

1. Enter text in this editor. *(The editor supports markdown. Feel free to use plain text or markdown, either should work.)*
2. Set a name for your document.
3. Click the "Download as PDF" button to save your document.

To find out more about markdown syntax, visit [Markdown Guide - Basic Syntax](https://www.markdownguide.org/basic-syntax/)

*Made by [jbdev](https://jbdev.io)* *[GitHub](https://github.com/JRBoland/text-to-pdf)*

`)
const [filename, setFilename] = useState<string>('document')  // removed .pdf extension from default

const handleFilenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newName = e.target.value.replace(/\.pdf$/, ''); // Remove .pdf if it exists
  setFilename(newName);
};

  return (
    <div className="min-h-screen bg-gray-800 p-4 sm:p-6">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded p-4 sm:p-6">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
          Markdown to PDF Converter
        </h1>
        <div className="flex flex-col gap-4 my-4">
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          <MarkdownPreview markdown={markdown} />
          <div className="flex items-center gap-2 justify-center">
            <div className="flex flex-col items-left gap-4">
              <div className="gap-2">
                <span className="font-semibold">Filename:</span>
                <input
                  type="text"
                  value={filename}
                  onChange={handleFilenameChange}
                  className="border rounded py-1 ml-2 px-2"
                  placeholder="Enter filename"
                />
                <span>.pdf</span>
              </div>
              <DownloadButton
                elementId="markdown-preview"
                filename={`${filename}.pdf`} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
