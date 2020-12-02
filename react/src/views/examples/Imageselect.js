import React, { useState, useCallback ,useEffect} from 'react'
import Cropper from 'react-easy-crop'
import { Link, Redirect, useHistory } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles'
import getCroppedImg from './cropImage'
import { styles } from './styles'

import {
  Button,
  Input,
  Container,
  Row,Col

} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import test from 'views/dev/insertTest';




const Demo = ({ classes }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [redirect, setRedirect] = useState(false)
  
  
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  useEffect(()=>{

    if(redirect){
      blob_state()
    }

   });

  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  
  const history = useHistory();
  const blob_state = () => {
    history.push({
      pathname : '/Imagemasking',
      state : {croppedImage:croppedImage}
    })
  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
        const croppedImage = await getCroppedImg(
        imgData,
        croppedAreaPixels
      )

      console.log('donee', { croppedImage })
      
      setCroppedImage(croppedImage)
      console.log("showCroppedImage",croppedImage);
      setRedirect(true)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels]) 

  




  

  return (
    <>
      <IndexNavbar />
      <div>
      <div className="page-header clear-filter" filter-color="blue">
      
      <Container>
      <h2 className="title">이미지 업로드</h2>
   <Container>
     
        <div className={classes.inputimage}>
          <Input
            type="file"
            name="file"
            accept='image/jpg,impge/png,image/jpeg'
            onChange={onChangePicture}></Input>
        </div>
       
        <div className={classes.cropContainer}>
      
          <Cropper
            image={imgData}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}  
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        
        </div>
        </Container>
        <div className={classes.controls}>
          <Container >
          <Button className="btn-neutral btn-round"
          color="info"
          size="lg"
          type="button"
          onClick={() => {
            showCroppedImage();          
          }}
          variant="contained"
          tag={Link}
          >
            다음 단계            
          </Button>
          </Container>
        </div>

     
        </Container>
      </div>
      </div>
    </>
  );
}

const Imageselect = withStyles(styles)(Demo)
  
// const rootElement = document.getElementById('root')
// ReactDOM.render(<Imageselect />, rootElement)

export default Imageselect;

