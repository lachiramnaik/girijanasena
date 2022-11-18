import styled from 'styled-components';
import Image from '../../images/about/about.jpeg'
import { Row,Col } from 'react-bootstrap';
export const Container=styled.div`
padding:10px;
margin:-80px 15px 15px 15px;
background:#ffffff;
`;
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
display:flex;
justify-content:center;
`;
export const StyledCol=styled(Col)`
margin-top:40px;
@media only screen and (max-width: 550px) {
        margin-top:10px;
        
    }
&.maincard{
    background:#ffffff;
    padding:20px;
}
.card{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border:none;
    padding:10px;
    border-radius:0px;
    min-height:500px;
    @media only screen and (max-width: 550px) {
        margin-top:40px;
        height:auto;
    }
    :hover{
        .image{
transform: scale(0.8);
transition: 1s ease;

    }
}
}
.text{
    font-size:17px;
    margin-top:30px;
}
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
export const SectionOneHeader=styled.h3`
text-align:center;
font-size:25px;
color:blue;
`;
export const CardImage=styled.div`
display:flex;
justify-content:center;
.image{
width:100%;
height:30vh;
transition: 1s ease;
}
`;
export const ReadMore=styled.div`
margin-top:15px;
text-align:end;
.link{
  
    font-size:15px;
text-decoration:none;
color:blue;
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
