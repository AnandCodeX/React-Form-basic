import React from "react";
/* import ProfImg from "./images/profile-images.jpg";
 */ import "./Pic.css";
import Profileimag from "./Images/Profiles.jpg";
class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    console.log("the file url is : " + this.state.file);
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
          src={Profileimag}
          htmlFor="upimag"
          srcSet={this.state.file}
          style={{
            width: "150px",
            height: "200",
            border: "2px solid grey",
            backgroundColor: "black",
          }}
          alt="profile Pic"
        />
        <br />
        <input type="file" name="upimag" onChange={this.handleChange} />
      </div>
    );
  }
}
export default Upload;
