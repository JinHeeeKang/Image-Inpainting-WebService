import React from 'react';


import {
  Container,
  Button,
  Row,Col
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { lightBlue } from '@material-ui/core/colors';



function Image_Gallery(props){

  console.log("gallery",props)
  console.log("location.state",props.location.state)
  


  const fileList=props.location.state
  
  return (
    <>
      <IndexNavbar />  
      <div>
          <div className="page-header clear-filter" filter-color="blue" position="center"> 
              <Container>
              <h2 className="title">갤러리</h2>

              {fileList.map(file => {
                console.log(file['id'],file)
                // file['id']%2 === 0 
                let url = file['url'].split('predict')
                      return (
                        
                        <Row>
                        <Col md="6">
                        <img src={url[0]+'original'+url[1]}/>
                        <h3>전</h3>
                        </Col>
                        <Col md="6"> 
                        <img src={file.url}/>
                        <h3>후</h3>
                        </Col>
                        </Row>
                      
                        );
                        
                    })}
             
          </Container>

        
          </div>
      </div>
    </>  
  );

}

export default Image_Gallery;

