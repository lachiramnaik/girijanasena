import styled from 'styled-components';

// web navbar
export const WebContainer = styled.div`
 position: fixed;
 width:100%;
padding:5px 10px 0px 10px;
min-height:75px;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 300px 0px;
background-color:#ffffff;
z-index: 1;
@media only screen and (max-width: 550px) {
    display:none;
}
`;
export const WebDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
/* .dropdown-menu{
    border:none;
} */
&#dropdown-basic{
    border:none;
    background:red;
}
`;
export const WebLogo = styled.div`
align-items:center;
padding-left:15px;
padding-top:3px;
/* font-size:30px;
font-weight:600; */
`;

export const WebMenu = styled.div`
display:flex;
`;
export const DropdownMenu = styled.div`
.dropdown-menu{
  border:none;
margin-left:100px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`;
export const WebContent = styled.div`
.link{
text-decoration:none;
color:#34495e;
}
padding-right:30px;
font-weight:545;
font-size:18px;
cursor: pointer;
:hover{
    color:#22409A;
    transition:all 0.2s ease;
    /* border-bottom:2px solid #22409A; */
}
&.dropdown-menu{
  border:none;
}
`;
// mobile navbar
export const MobileContainer = styled.div`
 position: fixed;
 box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 300px 0px;
 width:100%;
 z-index: 1;
display:none;
@media only screen and (max-width: 550px) {
    display:block;
    padding:10px 10px 0px 17px;
height:70px;
background-color:#ffffff;


}
.menuicon{
    cursor: pointer;
    /* &:hover{
        background-color:#4e4b4b61;
      clip-path:circle();
      transition: all 0.5s ease;
    } */
}
`;
export const MobileDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
export const MobileLogo = styled.div`
/* align-items:center;
padding-left:15px;
padding-top:5px; */
/* font-size:30px;
font-weight:600; */
`;
export const CloseIcon = styled.div`
display:flex;
justify-content:space-between;
padding:15px 20px 0px 10px;
cursor: pointer;
`;
export const MobileMenu = styled.div`
display:flex;
flex-direction:column;
`;
export const MobileHeader = styled.div`
font-size:20px;
font-weight:600;
`;
export const MobileContent = styled.div`
font-weight:500;
font-size:18px;
padding-top:10px;
cursor: pointer;
.link{
text-decoration:none;
color:#34495e;
margin-left:15px;
}
&.mobilecolleapse{
  text-decoration:none;
color:#34495e;
margin-left:15px;
}
&.collapse{
  background:red;
  color:red;
}
`;
export const TopButton = styled.div`
display:none;
height:40px;
position: fixed;
width:40px;
background:#1110106f;
clip-path:circle();
color:white;
display:flex;
text-align:center;
justify-content:center;
align-items:center;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  cursor:pointer;
  :hover{
    background:#111010a4;
    transition:0.5s ease;
  }
 
`;
export const Membership = styled.div`
 .membership{
     text-decoration:none;
     color:white;
 }
height:40px;
position: fixed;

padding:10px;
background:#22409a;
display:flex;
border-radius:30px 0px 0px 30px;
text-align:center;
justify-content:center;
align-items:center;
  bottom: 380px;
  right: 0px;
  z-index: 99;
  cursor:pointer;
  :hover{
    background:#fab1a0;
    transition:0.5s ease;
  }
  @media only screen and (max-width: 550px) {
    bottom: 100px;
  }
`;

