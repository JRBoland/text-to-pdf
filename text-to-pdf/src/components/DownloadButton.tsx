import React from 'react';
import html2pdf from 'html2pdf.js';

interface DownloadButtonProps {
  elementId: string;
  filename?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ elementId, filename = 'document.pdf' }) => {
  const handleDownload = () => {
    const element = document.getElementById(elementId);
    if (element) {
      const opt = {
        margin:       10,
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      Download as PDF
    </button>
  );
};

export default DownloadButton;