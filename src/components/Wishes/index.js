import React,{useState} from 'react'
import Rsp from '../../images/dummy/rsp.jpeg'
import { MainCard, MainImage, Overlay, ContentCard,CardContent,Message, Button,Loader } from './styles'
const Wishes = ({setState}) => {

  const[loader,setLoader]= useState('');

  const handleSubmit=()=>{
    setLoader('wait')
    setTimeout(() => {
     setState('launched')
    }, 3000);
  }

  const Loading =()=>{
    return (
      <>
      <Loader>Please wait launching website...</Loader>
      </>
    );
  }

  return (
    <MainCard>
    <MainImage>
      <Overlay>
          <Message>
      <img src={Rsp} alt='' className='image'></img>
      <br />
      <ContentCard md={6}>
        <center>
<CardContent>
    Wish You Happy Birthday R S Praveen Kumar Sir
</CardContent>
{loader==='' && <Button onClick={handleSubmit}>Launch Website</Button>}
{loader ==='wait' && <Loading></Loading>}
</center>
      </ContentCard>
      </Message>
      </Overlay>
    </MainImage>
  </MainCard>
  )
}

export default Wishes;