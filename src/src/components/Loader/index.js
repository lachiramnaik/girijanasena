import React from 'react'
import Loaders from "react-js-loader";
import GlobalStyle from '../../configuration/globalstyle'
 import { Container } from './styles'
const Loader = () => {
  return (
   <>
   <GlobalStyle/>
   <Container><Loaders type="spinner-default" bgColor={"#636e72"}  size={40} /></Container>
 
               
           
   </>
  )
}

export default Loader