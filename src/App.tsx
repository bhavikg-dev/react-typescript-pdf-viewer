import React from 'react';
import logo from './logo.svg';
import './App.css';
import PDFViewer from 'pdf-viewer-reactjs';

function App() {
  return (
    <div className="App">
    <PDFViewer
      document={{
        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
      }}
    />
    </div>
  );
}

export default App;
