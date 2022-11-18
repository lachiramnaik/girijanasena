import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
export const FooterContainer = styled.div`
background: #0F2027;  
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
padding:20px 10px 10px 10px;;
`;
export const StyledRow = styled(Row)`
display:flex;
justify-content:center;
width:100%;
margin-left: 0px;
`;
export const StyledCol = styled(Col)`
text-align:center;
color:white;
`;
export const FooterCard = styled.div`
margin:15px 10px;
   padding:10px;
background:#ffffff1c;
border-radius:10px;
height:200px;
.links{
	text-decoration:none;
	color:white;
	:hover{
		color:blue;
		transition:1s ease;
	}
}
`;
export const FooterHeader = styled.div`
font-size:23px;
font-weight:550;

`;
export const SocialDev = styled.div`
display:flex;
flex-direction:column;
`;
export const SocialIcons = styled.div`
.socialicon{
	text-decoration:none;
	color:white;
padding-top:12px;
display:flex;
flex-direction:row;
align-items:center;
transition: 1s ease;
justify-content:center;
cursor: pointer;
:hover{

transform: scale(1.2);
transition: 1s ease;
    
}
}

`;
export const Text = styled.div`
font-size:15px;
padding-left:12px;
`;
export const AddersText = styled.div`
font-size:15px;
`;
export const CopyRight = styled.div`
text-align:center;
padding-top:15px;
font-size:12px;
color:white;
`;


