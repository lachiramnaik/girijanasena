import styled from 'styled-components';
import { Row,Col } from 'react-bootstrap';
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
display:flex;
justify-content:center;
`;
export const StyledCol=styled(Col)`
.images{
    width:100%;
    height:35vh;
    transition: 1s ease;
    :hover{
        box-shadow:
1px 1px #373737,
2px 2px #373737,
3px 3px #373737,
4px 4px #373737,
5px 5px #373737,
6px 6px #373737;
-webkit-transform: translateX(-3px);
transform: translateX(-3px);
transition: .5s ease;
    }
}
`;
export const Card=styled(Col)`
padding:15px;
background:#ffffff;
margin-top:20px;
`;