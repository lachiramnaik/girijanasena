import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import GlobalStyle from '../../configuration/globalstyle'
import { Offcanvas } from 'react-bootstrap';
import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { TiArrowUpThick } from "react-icons/ti";
import Logo from '../../images/navbar/logo.png'
import { WebContainer, WebLogo, WebMenu, WebContent, WebDiv, MobileContainer, CloseIcon, MobileMenu, MobileContent, MobileHeader, MobileDiv, MobileLogo, TopButton, Membership,DropdownMenu } from './styles'
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // topbutton script
  var topbutton = document.getElementById("topbutton");
  window.onscroll = ()=> { 
	  scrollFunction() 
	};
  const scrollFunction=()=> {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  }
 const topFunction=()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>

      <GlobalStyle />
      {/* web menu */}

      <WebContainer>
        <WebDiv>
          <WebLogo><img src={Logo} alt='' style={{ width: '75px', height: '60px' }}></img></WebLogo>
          <WebMenu>
            <WebContent> <Link to="/" className='link'>Home</Link></WebContent>
            <WebContent><Link to="/about" className='link'>About</Link></WebContent>
            <DropdownMenu class="dropdown-center">
              <WebContent   data-bs-toggle="dropdown" aria-expanded="false">
                Activities+
              </WebContent>
              <ul class="dropdown-menu">
                <li><Link to="/culture" className='link dropdown-item'>Culture</Link></li>
                <li><Link to="/calender" className='link dropdown-item'>Calendar</Link></li>
              </ul>
            </DropdownMenu>


            <WebContent><Link to="/team" className='link'>Team</Link></WebContent>
            <WebContent><Link to="/gallery" className='link'>Gallery</Link></WebContent>
            <WebContent><Link to="/Contact" className='link'>Contact Us</Link></WebContent>
          </WebMenu>
        </WebDiv>
      </WebContainer>
      {/* mobile menu */}
      <MobileContainer>
        <MobileDiv>
          <BiMenu size={30} onClick={handleShow} className='menuicon' />
          <MobileLogo><img src={Logo} alt='' style={{ width: '70px', height: '55px' }}></img></MobileLogo>
        </MobileDiv>

        <Offcanvas show={show} onHide={handleClose} style={{ width: '280px' }}>
          <CloseIcon>
            < MobileHeader >Rsp Girijanasena</MobileHeader>
            <GrFormClose size={30} onClick={handleClose} />
          </CloseIcon>
          <Offcanvas.Body>
            <MobileMenu>
              <MobileContent> <Link to="/" className='link' onClick={handleClose}>Home</Link></MobileContent>
              <MobileContent><Link to="/about" className='link' onClick={handleClose}>About</Link></MobileContent>
              <MobileContent className='mobilecolleapse' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Activities+</MobileContent>
             
  <div class="collapse" id="collapseExample">
  <MobileContent> <Link to="/culture" className='link' onClick={handleClose}>Culture</Link></MobileContent>
              <MobileContent><Link to="/calender" className='link' onClick={handleClose}>Calender</Link></MobileContent>
</div>
              <MobileContent><Link to="/gallery" className='link' onClick={handleClose}>Gallery</Link></MobileContent>
              <MobileContent><Link to="/Contact" className='link' onClick={handleClose}>Contact Us</Link></MobileContent>
            </MobileMenu>
          </Offcanvas.Body>
        </Offcanvas>
      </MobileContainer>
      <TopButton id='topbutton' onClick={topFunction}><TiArrowUpThick size={25} className='topicon' /></TopButton>
      <Membership>
	  <Link to="/membership" className='membership'>Take a Membership</Link>
        
      </Membership>
    </>
  )
}

export default Navbar