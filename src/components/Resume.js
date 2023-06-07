import React from 'react'
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from '../assets/JN2023.pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../style/resumePage.css"

function Resume() {  
  

  return (
    <div className='resumeDiv'>
        <Document file = {resumePDF}>
            <Page pageNumber = {1} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
    </div>
  )
}

export default Resume