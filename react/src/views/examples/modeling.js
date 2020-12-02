import React, { useState, useCallback, useEffect } from 'react'
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import { Redirect } from 'react-router-dom';


import {
  Button,
  Container,
  Row,Col

} from "reactstrap";



function Demo(props){

  console.log("url1",props.location.state.url1)
  console.log("url2",props.location.state.url2)
  console.log("url2",props.location.state.cropimagURL)

  const maskedori_url=props.location.state.url1
  const result_url=props.location.state.url2
  const cropimagURL=props.location.state.cropimagURL
  const [redirect,setRedirect]=useState(false)
  const [data,setData]=useState(null)





/* Flask에서 predict 이미지 url 전송 */
  const handlesendtoFlask = async() => {
    console.log("handlesendtoFlask gallery start")

    const data = {
    }
   
    let url = "http://15.165.112.235:5004/getimage";
    await fetch(url,{
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache", 
      header: {
        "Content-Type": "application/json",
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log("modeling data",data);
      setData(data)
      console.log("function in",data); 
      setRedirect(true);
      
    })
}

if (redirect) {
  return <Redirect to={{
      pathname:"/Image_Gallery",
      state:data  
  }  
}/>;
}

console.log("redirect in",data); 


const download = () => {
  var element = document.createElement("a");
  // var file = new Blob(
  //   [result_url],
  //   { type: "image/jpg" }
  // );
  // element.href = URL.createObjectURL(file);
  // element.download = "result.jpg";
  element.click();
};




return (
  <>
    <IndexNavbar />
    <div>
      <div className="page-header clear-filter" filter-color="blue" position="center">
      <Container>
        <Container>
        <h2 className="title">모델링</h2>


        <Row>
          <Col md="4">
            <img src={cropimagURL}/>
            <h3>Original Image</h3>
          </Col>
          <Col md="4">
            <img src={maskedori_url}/>
            <h3>Masked Image</h3>
          </Col>
          <Col md="4">
            <img src={result_url}/>
            <h3>Result Image</h3>
          </Col>
        </Row>
       
        </Container>

        <Container>
        
        <a
          href={result_url}
          download
          onClick={() => download()}
          >
          <Button 
          className="btn-neutral btn-round"
          color="info"
          size="lg"
          variant="contained"
          >
            이미지 저장 
          </Button>
          </a>



          <Button
          className="btn-neutral btn-round"
          color="info"
          size="lg"
          variant="contained"
          onClick={handlesendtoFlask}
          >
           갤러리
          </Button>
          </Container>

          </Container>
        </div>
        </div>
  </>      
)
}
const Modeling = withStyles(styles)(Demo)

export default Modeling;

