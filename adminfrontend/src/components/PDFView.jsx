import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toast } from 'react-hot-toast';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

export const PDFView = ({ documentUrl }) => {
    return (
        <div className="  border border-gray-300 h-[50vh] sm:h-[70vh]">
            {documentUrl ? (
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={documentUrl} />
                </Worker>

            ) : (
                <p>Loading document...</p>
            )}
        </div>
    );
};
