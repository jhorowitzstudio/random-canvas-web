import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      // Do whatever you want with the file contents
      props.handleUpload({ blob: reader.result });
    };
    acceptedFiles.forEach(file => reader.readAsDataURL(file));
  }, []);
  const {
    getRootProps,
    getInputProps
    /* isDragActive */
  } = useDropzone({ onDrop });

  return (
    <button
      type="button"
      style={{
        maxWidth: 150,
        border: '3px dashed black',
        borderRadius: 20,
        fontSize: 12,
        margin: 10,
        padding: 30,
        backgroundColor: '#ccc'
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Drag and drop a file here, or click to select a file</p>
    </button>
  );
}

export default MyDropzone;
