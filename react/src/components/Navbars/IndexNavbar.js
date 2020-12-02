import React ,{useState} from "react";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

import { Redirect } from 'react-router-dom';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const [redirect,setRedirect]=useState(false)
  const [data,setData]=useState(null)

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  
  /*바로 갤러리*/
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



  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
              Team A3 Project
            </NavbarBrand>
           
            <button
              className="navbar-toggler navbar-toggler"
              onClick={ async() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
              
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/">
                  <i className="now-ui-icons shopping_shop"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="/Image_Gallery"
                  onClick={handlesendtoFlask}
                >
                  <i className="now-ui-icons design_image mr-1"></i>
                  <p>Gallery</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="github-tooltip"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  Follow us on Github
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
