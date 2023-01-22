import { useState, useRef } from 'react';

import {
  UploadBtn,
  UploadWrap,
  FakeInput,
  RealInput,
} from './FileUploader.styled';

import { UPLOADER_FILE_TYPES } from '../../constants';

export const checkUploadFileFormatIsValid = (file, acceptedFileFormats) =>
  acceptedFileFormats.some(
    fileType => file?.type.includes(fileType) || file?.name.includes(fileType)
  );

const DEFAULT_UPLOAD_MAX_SIZE = 10; // MB

const FileUploader = ({ setAvatar }) => {
  const maxFileSizeInBytes = DEFAULT_UPLOAD_MAX_SIZE * 1024 * 1024;

  const dropAreaRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState();

  const uploadFileInputLabel = uploadedFile?.name ?? 'Upload your photo';

  const onInputChange = event => {
    const target = event.target;
    const file = target.files[0];

    if (file.size > maxFileSizeInBytes) {
      console.error('ti invalid');

      return;
    }

    setUploadedFile(file);
  };

  const onDrop = event => {
    if (dropAreaRef.current) {
      dropAreaRef.current.style.removeProperty('background');
    }

    const { dataTransfer: files } = event;

    const droppedFiles = files.files;

    if (droppedFiles.length > 1) {
      console.error('ti invalid');

      return;
    }

    const droppedFile = files.files[0];

    if (droppedFile.size > maxFileSizeInBytes) {
      console.error('ti invalid');

      return;
    }

    if (!checkUploadFileFormatIsValid(droppedFile, UPLOADER_FILE_TYPES)) {
      console.error('ti invalid');

      return;
    }

    setUploadedFile(droppedFile);
  };

  const onDragOver = () => {
    if (dropAreaRef.current) {
      dropAreaRef.current.style.background = '#84d1c2';
    }
  };

  const onDragLeave = () => {
    if (dropAreaRef.current) {
      dropAreaRef.current.style.removeProperty('background');
    }
  };

  return (
    <label
      ref={dropAreaRef}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      htmlFor="downloadInput"
    >
      <div>
        <UploadWrap>
          <UploadBtn>Upload</UploadBtn>
          <FakeInput>{uploadFileInputLabel}</FakeInput>
        </UploadWrap>
        <RealInput
          type="file"
          id="downloadInput"
          accept={UPLOADER_FILE_TYPES}
          onChange={onInputChange}
        />
      </div>
    </label>
  );
};

export default FileUploader;
