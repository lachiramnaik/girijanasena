import styled from 'styled-components';
import { Row,Col } from 'react-bootstrap';
export const StyledRow=styled(Row)`
margin-left:0;
width:100%;
display:flex;
justify-content:center;
`;
export const StyledCol=styled(Col)`
&.sectiononecol{
    background:#ffffff;
    text-align:center;
}
.card{
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
.text{
    font-size:19px;
    margin-top:30px;
}
span{
	font-size:25px;
	color:#c0392b;
}
}
`;
export const Mainvideo=styled.div`

width: 100%;
height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .video-1{
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
    }
`;
export const MainvideoContent=styled.div`
 position: relative;
    left: 0;
    width: 100%;
    height: 100%;
    color: #f1f1f1;
    justify-content: center;
    text-align: center;
	align-items:center;
    top: 0;
    background: #0303037e;
    .img{
      
		margin-top:60px;
 width: 200px;
 height: 200px; 
 clip-path:circle();

    }
    .text{
        margin-top:30px;
        font-family:Apple Chancery;
    }
	.kotation{
	margin-top:200px;
        font-family:Apple Chancery;
	}
	@media only screen and (max-width: 680px) {
        .text{
        margin-top:20px;
        font-family:Apple Chancery;
    }
	.img{
        margin-top: 40px;
 width: 100px;
 height: 100px; 
    }
	.kotation{
		font-size:20px;
	margin-top:250px;
        font-family:Apple Chancery;
	}
    }
`;
export const Images = styled.div`

`;


export const SectionOne=styled.div`

`;
export const CardOneContent=styled.div`
line-height:35px;
padding:30px;
font-size:18px;
text-align:start;
.span{
    font-weight:500;
    font-size:25px;
    color:blue;
}
li{
    margin-left:40px;
    @media only screen and (max-width: 600px) {
        margin-left:0px;
    }
}
`;
export const SectionOneHeader=styled.h3`
text-align:center;
font-size:30px;
color:blue;
`;
export const Achivements=styled.div`
margin:60px 10px 10px 10px;


`;
export const SectionTwo=styled.div`
margin:50px 10px 10px 10px;
padding:15px 10px 10px 10px;

box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const CardImage=styled.div`
display:flex;
justify-content:center;
.image{
width:80%;
height:30vh;

transition: 1s ease;
}
`;
export const SectionThree=styled.div`
margin-top:80px;

`;
export const ReadMore=styled.div`
margin-top:15px;
text-align:end;
.link{
  
    font-size:16px;
text-decoration:none;
color:blue;
}
`;
export const SectionFour=styled.div`
margin-top:50px;
`;
export const SectionFourCard=styled.div`
background:#ffffff;
margin:0px 20px 0px 20px;
padding:15px;

&.sectionfivecard{
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
export const SectionFive=styled.div`
margin:40px 0px 60px 0px;
`;
