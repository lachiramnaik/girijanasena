import React,{useState} from 'react'
import GlobalStyle from '../../configuration/globalstyle'
import Rsp from '../../images/dummy/rsp.jpeg'
import { StyledCol,StyledRow ,Image,Content,Button,Loader} from './styles'
const Launching = ({setState}) => {
  const[loader,setLoader]= useState('');
  const handleSubmit=()=>{
    setLoader('wait')
    setTimeout(() => {
      setState('wishes')
    }, 1000);
  }

  const Loading =()=>{
    return (
      <>
      <Loader>Please wait Loading...</Loader>
      </>
    );
  }
  return (
      <>
      <GlobalStyle/>
    <StyledRow >
        <StyledCol md={8}>
            <Image> <img src={Rsp} alt='' className='img'></img></Image>
            <Content>It gives us great pleasure to welcome such a distinguished individual as our Chief Guest R S Praveen Kumar sir tonight for the launch of the RSP GIRIJANA SENA website. So, Sir, please accept our greetings on behalf of everyone present.</Content>
            <center>
            {loader==='' && <Button onClick={handleSubmit}>Launch Rsp Girijana Sena Website</Button>}
            {loader==='wait' && <Loading/>}
           </center>

        </StyledCol>
    </StyledRow>
    </>
  )
}

export default Launching;