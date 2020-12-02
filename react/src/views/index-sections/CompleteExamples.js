import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import team_01 from "/home/jin/react/src/assets/img/team_01.png";
import team_02 from "/home/jin/react/src/assets/img/team_02.png";
import team_03 from "/home/jin/react/src/assets/img/team_03.png";


function CompleteExamples() {
  return (
    <>
      <div className="section section-team"
        data-background-color="blue"
        style={{
          // minHeight: "400px"
        }}
      >
        <Container className="text-center">
          <h3 className="title">Team A3</h3>
          <h5 className="description" style={{ marginBottom : 30 }}>Team A3를 소개합니다.</h5>
          <div class="Team">       
            <Row>
              <div class="col-md-4">
                <div class="Team-player">
                  <img class="rounded-circle img-fluid img-raised" alt="..." src={team_01} style={{ backgroundColor: "white", maxWidth : "60%" }} />
                  <h4>강진희</h4>
                </div>
              </div>
              <div class="col-md-4">
                <div class="Team-player">
                  <img class="rounded-circle img-fluid img-raised" alt="..." src={team_02} style={{ backgroundColor: "white", maxWidth : "60%"}} />
                  <h4>이세나</h4>
                </div>
              </div>
              <div class="col-md-4">
                <div class="Team-player">
                  <img class="rounded-circle img-fluid img-raised" alt="..." src={team_03} style={{ backgroundColor: "white", maxWidth : "60%" }} />
                  <h4>정윤지</h4>
                </div>
              </div>
              {/* <Col lg="8" md="12"> */}
                {/* <h3 className="title">Team A3</h3>
                <h5 className="description">Team A3를 소개합니다.</h5> */}
              {/* </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
