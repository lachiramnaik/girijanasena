import styled from 'styled-components';

import { Row,Col } from 'react-bootstrap';

export const Maincontainer=styled.div`
@media only screen and (max-width: 800px) {
 margin:0px 20px;
}
`;

export const StyledRow=styled(Row)`
margin-left: 0px;
width:100%;
display: flex;
justify-content:center;


`;
export const StyledCol=styled(Col)`
margin:170px 0px 50px 0px;
padding:100px 10px 100px 10px;
background-color:#ffffff;
border-radius:4px;
justify-content:center;
text-align:center;
`;
export const Text=styled.div`
font-weight:700;
font-size:35px;
@media only screen and (max-width: 600px) {
    font-weight:600;
font-size:25px;
}
`;
export const Div=styled.div`
margin-top:30px;
justify-content:center;
display:flex;
`;
export const Button=styled.div`
.link{
	padding:10px 20px;
width:200px;
background-color:#e84118;
border-radius:4px;
cursor: pointer;
color:white;
text-decoration:none;
}
@media only screen and (max-width: 600px) {
    padding:7px 20px;

}
`;





