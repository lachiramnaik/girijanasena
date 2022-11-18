import React from 'react'
import { Link } from "react-router-dom";
import { Maincontainer, StyledRow, StyledCol, Text, Div, Button } from './styles'
import { ReactComponent as Pagenotfundicon } from '../../images/nodatapage/emptypage.svg'

const Nodatapage = () => {
  return (
    <>
      <Maincontainer>
        <StyledRow >
          <StyledCol md={8}>
            <Pagenotfundicon />
            <Text>404 Page not found</Text>
            <Div><Button> <Link to="/" className='link'>Back To Home</Link></Button></Div>
          </StyledCol>
        </StyledRow>
      </Maincontainer>

    </>
  )
}

export default Nodatapage