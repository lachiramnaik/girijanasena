import styled from 'styled-components';
import { Row,Col } from 'react-bootstrap';

export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
display:flex;
justify-content:center;
`;
export const StyledCol=styled(Col)`

`;
export const Container=styled.div`
margin:40px 20px 0px 20px;
@media only screen and (max-width: 600px) {
    margin:40px 10px 0px 10px; 
}
`;
export const SectionOneHeader=styled.h3`
text-align:center;
font-size:23px;
color:blue;
`;
