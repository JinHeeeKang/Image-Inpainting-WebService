/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";

import Imagemasking from "views/examples/Imagemasking.js";
import Imageselect from "views/examples/Imageselect.js";

import Image_upload from "views/examples/Image_upload.js";
import Modeling from "views/examples/modeling.js";
import Image_Gallery from "views/examples/gallery.js";


import Login from "views/dev/Login.js";
import InsertTest from "views/dev/insertTest.js";

import Test_Imageselect from 'views/examples/Test_Imageselect.js';
import Test_Masking from 'views/examples/Test_Masking.js';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
       
  
        {/* <Route path="/Flask" render={(props) => <Flasksample {...props} />} /> */}
        {/* blob:http://15.165.112.235:3000/d4f95bb3-3e23-4e6c-a52a-0a0330406337 */}
        {/* <Route path="/Imagemasking/:blob//:ip/:remain" render={(props) => <Imagemasking {...props} />} /> */}
        
        <Route path="/Imagemasking" render={(props) => <Imagemasking {...props} />} />
        <Route path="/Imageselect" render={(props) => <Imageselect {...props} />} />
        <Route path="/Image_upload" render={(props) => <Image_upload {...props} />} />
        <Route path="/Modeling" render={(props) => <Modeling {...props} />} />
        <Route path="/Image_Gallery" render={(props) => <Image_Gallery {...props} />} />




        <Route path="/Test_Imageselect" render={(props) => <Test_Imageselect {...props} />} />   
        <Route path="/Test_Masking" render={(props) => <Test_Masking {...props} />} />   
        
        
        <Route
          path="/InsertTest"
          render={(props) => <InsertTest {...props} />}
        />

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
