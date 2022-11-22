import styled from 'styled-components';
import { Row,Col } from 'react-bootstrap';
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;
export const StyledCol=styled(Col)`
padding:20px;
text-align:center;
margin-top:80px;
background:#ffffff;

`;
export const Image =styled.div`
margin-top:60px;
.img{
 width:350px;
height:350px;
clip-path:circle();
}
`;
export const Content =styled.div`
margin-top:30px;
font-size:20px;
font-weight:500;

`;
export const Button =styled.div`
margin-top:50px;
cursor:pointer;
color:white;
border-radius:8px;
padding:10px 20px;
background:#30336b;
width:300px;
:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`;
export const Loader= styled.div`
margin-top:30px;
color:black;
`;