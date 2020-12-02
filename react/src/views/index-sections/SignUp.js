import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-guide"
        style={{
          // backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          // backgroundSize: "cover",
          // backgroundPosition: "top center",
          // minHeight: "500px"
        }}
      >
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <div class="guide" style={{ marginTop : 50, marginBottom : 50 }}>
              <h3 className="title">사용방법</h3>
              <p>이미지 업로드 후 512x512 사이즈로 크롭합니다.<br></br>
                다음 단계에서 지우고 싶은 부분을 마스킹합니다.<br></br> 
                마스킹한 이미지를 모델에 적용하면 복구된 이미지를 확인할 수 있습니다.</p>
              <Button
                  className="btn-info btn-round"
                  color="info"
                  to="/Imageselect"
                  // onClick={e => e.preventDefault()}
                  size="lg"
                  tag={Link}
                >
                  시작하기
                </Button>
            </div>
            {/* <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
              <CardHeader className="text-center">
                <CardTitle className="title-up" tag="h3">
                  사용방법
                </CardTitle>
                <div className="social-line">
                  
                </div>
              </CardHeader>
              <CardBody className="text-center">
                이미지 업로드 후 512x512 사이즈로 크롭합니다.<br></br>
                다음 단계에서 지우고 싶은 부분을 마스킹합니다. 
                마스킹한 이미지를 모델에 적용하면 복구된 이미지를 확인할 수 있습니다.
              
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="info"
                  to="/Imageselect"
                  // onClick={e => e.preventDefault()}
                  size="lg"
                  tag={Link}
                >
                  시작하기
                </Button>
              </CardFooter>
              </Form>
            </Card> */}
          </Row>
          {/* <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div> */}
        </Container>
      </div>
    </>
  );
}

export default SignUp;
