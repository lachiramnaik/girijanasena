import React from 'react'
import { StyledCol,StyledRow,Card,TeamName,TeamRole,MainCard,MainImage,Overlay,MainText} from './styles'
import TeamMembersData from './team'
import { Container} from 'react-bootstrap';
const Team = () => {
  return (
   <>
    <MainCard>
          <MainImage>
            <Overlay>
              <MainText> Rsp Girijanasena Team</MainText>
            </Overlay>
          </MainImage>
        </MainCard>
		
        <Container className='container' style={{background:'#ffffff', marginTop:'-40px',padding:'10px',zIndex:'1'}}>
    <StyledRow>
     {TeamMembersData.map((item)=>(
  <StyledCol md={4}>
     <div>
<img src={item.img} alt='' className='images'></img>
</div>
<Card>
    <TeamName>{item.name}</TeamName>
    <TeamRole>{item.role}</TeamRole>
    <TeamRole className='number'>{item.cell}</TeamRole>
</Card>
  </StyledCol>
  ))}
       </StyledRow>
       </Container>
       <br />
    <br />
    <br />
   </>
  )
}

export default Team