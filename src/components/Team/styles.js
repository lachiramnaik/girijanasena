import styled from 'styled-components';
import Image from '../../images/team/team.jpeg'
import { Row,Col } from 'react-bootstrap';
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
display:flex;
justify-content:center;
`;
export const StyledCol=styled(Col)`
text-align:center;
margin-top:40px;
.images{
    width:200px;
    height:200px;;
    transition: 1s ease;
    clip-path:circle();
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
export const Card=styled.div`
padding:20px 0px 1px 0px;
background:#ffffff;
border-radius:20px 0px 20px 0px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
text-align:center;
`;
export const TeamName=styled.h3`

`;
export const TeamRole=styled.p`
&.number{
	margin-top:-15px;
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
