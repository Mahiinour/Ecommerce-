import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/navi.css'
import logo from '../images/Group.png'
import cart from '../images/Vector.png'


const Navibar = () => {
  return (
    <Fragment>
       <Navbar bg="white" data-bs-theme="light">
        <Container> 
          
          <Nav className="me-auto" variant="underline" >
            <Nav.Link href="women">Women</Nav.Link>
            <Nav.Link href="men">Men</Nav.Link>
            <Nav.Link href="kids">Kids</Nav.Link>
            <div className="logo mx-auto">
             <img src={logo} alt="Logo" />
             </div>
             <img src={cart} alt="cart"/>
            {/* <img src={logo} alt='LOGO'/>    */}
          </Nav> 
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default Navibar
