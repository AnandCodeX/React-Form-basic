import React, { Component } from "react";
import { Button } from "react-bootstrap";

const FileUploader = (props) => {
  const handleClick = (event) => {
    document.getElementById("hiddenFileInput").click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(`focus${fileUploaded}`);
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>Upload a file</Button>
      <input
        type="file"
        id="hiddenFileInput"
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileUploader;
