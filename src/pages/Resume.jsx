import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section id='resume'>
      <div className='wrapper'>
        <h1>resume.</h1>
        <div>
          <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </section>
  );
}
