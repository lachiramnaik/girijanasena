import React from 'react'
import Images from './images'
import { StyledRow,StyledCol,Card } from './styles'
const Gallary = () => {
  return (
    <>
    <br />
    <br />
    <br />
     <StyledRow>
     {Images.map((item)=>(
  <StyledCol md={4}>
      <Card>
<img src={item.img} alt='' className='images'></img>
</Card>
  </StyledCol>
  ))}
       </StyledRow>
<br />
<br />
    </>
  )
}

export default Gallary

