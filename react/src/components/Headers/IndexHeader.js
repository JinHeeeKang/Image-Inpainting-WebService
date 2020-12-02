/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import bgimg from "assets/img/header2.jpg";

// import logoimg from "assets/img/now-logo1.png";


function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (  
  <>
    <div className="page-header clear-filter" filter-color="blue" id="page-header">
      <div
        className="page-header-image"
        style={{
          backgroundImage:"url("+ bgimg + ")",
        }}
        ref={pageHeader}
      ></div>
      <Container>
        <div className="content-center brand">
          {/* <img
            alt="..."
            className="n-logo"
            src={logoimg}
          ></img> */}
          <h1>인생샷 메이커</h1>
          <h3>간편한 이미지 복구 서비스를 제공합니다.</h3>
        </div>
      
      </Container>
    </div>
  </>
  );
}

export default IndexHeader;
