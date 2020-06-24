import React from "react";
import "./Style.css";
import Upload from "./upload";
import { useFormik } from "formik";

const Form = (props) => {
  const formik = useFormik({
    initialValues: {
      profileImg: "",
      imgSelect: "",
      imgSrc: "",
      id: "",
      firstName: "",
      lastName: "",
      mobileNo: "",
      emailID: "",
      discription: "",
    },
  });
  console.log("Form values", formik.values);

  return (
    <div className="container-fluid base ">
      <div className="Sign-up Form-body border grid">
        <form>
          <header className="jumbotron hdr">
            <p> First Form</p>
          </header>
          <div className="file-field">
            <div className="z-depth-1-half mb-4 imag">
              <img
                id="profImg"
                src="#"
                srcSet={formik.values.imgSelect}
                className="img-thumbnail imag-1 "
                alt="example placeholder"
                width="120px"
                height="150px"
                name="profileImg"
                style={{ border: "2px solid grey" }}
              />
            </div>
            <div className="d-flex justify-content-center butn">
              <div>
                <span className="btn btn-outline-secondary btn-file">
                  <input
                    className="imgSelectBtn"
                    type="file"
                    style={{ display: "none" }}
                    size="60"
                    name="imgSelect"
                    onChange={formik.handleChange}
                    value={formik.values.imgSelect}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="form-row ">
            <div className="col">
              <label id="lbl" className="dis">
                Id:
              </label>
              <input
                type="text"
                className="form-control "
                name="id"
                onChange={formik.handleChange}
                value={formik.values.id}
                placeholder="1"
                disabled
              />
            </div>
            <div className="col ">
              <label id="lbl">First Name:</label>
              <input
                type="text"
                className="form-control "
                placeholder="First name"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            <div className="col ">
              <label id="lbl">Last Name:</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="Last name"
              />
            </div>
            <div className="col ">
              <label id="lbl">Mobile No:</label>
              <input
                type="tel"
                maxLength="10"
                className="form-control "
                name="mobileNo"
                onChange={formik.handleChange}
                value={formik.values.mobileNo}
                placeholder="Enter 10 Digit Mobile No. "
              />
            </div>
            <div className="col ">
              <label id="lbl">Email ID:</label>
              <input
                type="email"
                className="form-control "
                name="emailID"
                onChange={formik.handleChange}
                value={formik.values.emailID}
                placeholder="Name@xyz.com.in"
              />
            </div>
            <div className="col  discription">
              <label id="lbl">Discription:</label>
              <br />
              <textarea
                type="text"
                maxLength="300"
                className="form-control z-depth-1  "
                name="discription"
                onChange={formik.handleChange}
                value={formik.values.discription}
                placeholder="Write upto 300 words"
                rows="5"
                cols="70"
              />
            </div>
            <div>
              <Upload />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
