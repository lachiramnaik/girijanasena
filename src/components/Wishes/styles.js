import styled from 'styled-components';
import Image from '../../images/dummy/gif.gif'
import { Row,Col } from 'react-bootstrap';

export const StyledCol=styled(Col)`
display:flex;
justify-content:center;
`;
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
justify-content:center;
`;
export const MainCard=styled.div`
`;
export const MainImage=styled.div`
width: 100%;
height: 100vh;
position: relative;
background-image: url(${Image});
background-repeat: no-repeat;
background-size: cover;
`;
export const Overlay=styled.div`
width: 100%;
height: 100vh;
color: white;
display: flex;
justify-content: center;
align-items: center;
.image{
    width:450px;
    height:450px;
    clip-path:circle();
}
`;
export const ContentCard=styled(Col)`
position:relative;
margin-top:30px;
background:#ffffff;
padding:50px;
`;
export const CardContent=styled(Col)`
color:black;
font-size:25px;
font-weight:700;
font-family:Apple Chancery;
`;
export const Message=styled(Col)`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
export const Button =styled.div`
margin-top:30px;
cursor:pointer;
color:white;
border-radius:8px;
padding:10px 20px;
background:#30336b;
width:200px;
:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`;
export const Loader= styled.div`
margin-top:30px;
color:black;
`;




