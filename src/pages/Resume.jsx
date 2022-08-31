import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function Resume() {
  const onButtonClick = () => {
    fetch('CV_David_Czuczor.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV_David_Czuczor.pdf';
        alink.click();
      });
    });
  };

  return (
    <section id='resume'>
      <div className='wrapper'>
        <div id='resume-head'>
          <h1>resume.</h1>
          <button onClick={onButtonClick} id='button-download-pdf'>
            Download PDF
          </button>
        </div>
        <Document
          file='CV_David_Czuczor.pdf'
          className='resume-document'
          renderMode='svg'
        >
          <Page pageNumber={1} renderMode='svg' />
          <Page pageNumber={2} renderMode='svg' />
        </Document>
      </div>
    </section>
  );
}