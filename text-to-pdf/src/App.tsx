import React, { useState } from 'react'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'
import DownloadButton from './components/DownloadButton'

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(`# Markdown to PDF Converter

1. Enter text in this editor. *(The editor supports markdown)*
2. Click the "Download as PDF" button to save your document.
`)

  return (
    <div className="min-h-screen bg-gray-800 p-4 sm:p-6">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Markdown to PDF Converter
        </h1>
        <div className="flex flex-col gap-4 my-4">
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          <MarkdownPreview markdown={markdown} />
        </div>
        <div className="flex justify-center">
        <DownloadButton elementId="markdown-preview" filename="document.pdf" />
        </div>
      </div>
    </div>
  )
}

export default App
