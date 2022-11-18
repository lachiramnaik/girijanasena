import styled from 'styled-components';
import Image from '../../images/about/about.jpg'
import { Row,Col } from 'react-bootstrap';
export const Container=styled.div``;
export const StyledCol=styled(Col)`
display:flex;
justify-content:center;
&.cardone{
background:#ffffff;
text-align:center;
}
.card{
    border:none;
    padding:10px;
    border-radius:0px;
    height:400px;
    @media only screen and (max-width: 550px) {
        margin-top:40px;
        height:auto;
    }
}
`;
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
justify-content:center;
`;
export const MainCard=styled.div`
`;
export const MainImage=styled.div`
z-index:-1;
width: 100%;
height: 600px;
position: relative;
background-image: url(${Image});
background-repeat: no-repeat;
background-size: cover;
`;
export const Overlay=styled.div`
width: 100%;
height: 600px;
font-size: 25px;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: #0000006c;
`;
export const  CardOne=styled.div`

`;
export const  CardOneSection=styled.div`

background:#ffffff;
margin:-50px 20px 0px 20px;
padding:15px;
transition: 1s ease;
&.sectionfivecard{
    border-radius:0px 30px 0px 30px;  
    @media only screen and (max-width: 600px) {
    border-radius:0px;
    }
}
:hover{
    .image{
transform: scale(1.1);
transition: 1s ease;
    }
}
@media only screen and (max-width: 600px) {
    border-radius:0px;
    }
`;
export const  CardTwo=styled.div`
margin:40px 0px 20px 0px;
`;
export const CardOneContent=styled.div`
padding:30px;
font-size:20px;
line-height:35px;
text-align:start;
li{
    margin-left:40px;
    @media only screen and (max-width: 600px) {
        margin-left:0px;
    }
}
`;
export const Cards=styled.div`
margin-top:50px;
.card{
    margin:20px;
    border:none;
}
.text{
    margin-top:30px;
    font-size:18px;
}
`;

export const CardImage=styled.div`
display:flex;
justify-content:center;
.image{
width:100%;
height:100%;
}
`;
export const MainText=styled.h3`
 -webkit-animation-name:slideInDown;
    animation-name: slideInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    }
    @-webkit-keyframes slideInDown {
    0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    }
    }
    @keyframes slideInDown {
    0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    }
`;





