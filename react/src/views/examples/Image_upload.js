import React, { Component } from "react";
import axios from "axios";
import Input_Images3_gets3 from "./Input_Images3_gets3.js";
import Output_Images3_gets3 from "./Output_Images3_gets3.js";
import image_upload from "assets/img/new/image_defualt.png";
import image_analysis from "assets/img/new/analysis_defualt.png";

import {
  Button,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

class Image_upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      input_s3path: image_upload,
      output_s3path: image_analysis,
      analysis_filename: null,
    };

    this.handlePost = this.handlePost.bind(this);
    this.handleAnalysis = this.handleAnalysis.bind(this);
  }

  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0],
    });
  }

  handlePost() {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    return axios
      .post("http://15.165.112.235:7777/api/upload", formData)
      .then((res) => {
        alert("성공");
        console.log(res.data.body);
        console.log(res.data.body.location);
        this.setState({
          input_s3path: res.data.body.location,
          analysis_filename: res.data.body.key,
        });
      })
      .catch((err) => {
        alert("실패");
      });
  }

  handleAnalysis() {
    const url = "http://15.165.112.235:5004/process";
    // console.log(this.state.selectedFile.name);/
    const data = {
      analysis_filename: this.state.analysis_filename,
      analysis_url: this.state.input_s3path,
    };

    console.log(data);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          output_s3path: data.url,
        });
      });
  }

  render() {
    return (
      <>
        <div className="section section-basic" id="basic-elements">
          <Container>
            <h3 className="title">이미지 업로드</h3>
            <Row>
              <Col>
                <Input
                  type="file"
                  name="file"
                  onChange={(e) => this.handleFileInput(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button color="info" type="button" onClick={this.handlePost}>
                  이미지 업로드
                </Button>
                <Button
                  color="info"
                  type="button"
                  onClick={this.handleAnalysis}
                >
                  분석하기
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Input_Images3_gets3 s3path={this.state.input_s3path} />
              </Col>
              <Col md="6">
                <Output_Images3_gets3 s3path={this.state.output_s3path} />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Image_upload;
