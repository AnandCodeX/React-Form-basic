import React, { Component } from "react";
/* import ProfImg from "./images/profile-images.jpg";
 */ import "./Pic.css";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <div className="uploadbttn">
        <img
          className="uploadimg img-thumbnail "
          src="./Images/Profiles.jpg"
          htmlFor="upimag"
          srcSet={this.state.file}
          style={{ width: "150px", height: "200", border: "2px solid grey" }}
          alt="profile Pic"
        />
        <input type="file" name="upimag" onChange={this.handleChange} />
      </div>
    );
  }
}
export default Upload;
