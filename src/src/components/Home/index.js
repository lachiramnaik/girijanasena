import React from 'react'
import Card from 'react-bootstrap/Card';
// import rsp from '../../images/home/girijanasena.mp4'
import {  Link } from "react-router-dom";
import Poorna from '../../images/home/poorna.jpeg'
import Sevalal from '../../images/home/sevalal.png'
import Gussadi from '../../images/home/Gussadi.jpeg'
import Ambedkhar from '../../images/home/ambedkar.jpeg'
import Nagoba from '../../images/home/nagoba.webp'
import Komaram from '../../images/home/komaram.jpeg'
import Birsa from '../../images/home/birsa.jpeg'
import Anitha from '../../images/home/anitha.jpeg'
import Sindhu from '../../images/home/sindhu.jpeg'
import{StyledRow,StyledCol,Mainvideo,SectionOne,SectionTwo,SectionFour,SectionThree,CardOneContent,CardImage,SectionFive,SectionFourCard,SectionOneHeader,MainvideoContent,ReadMore,Images,Achivements } from './styles'
const Home = () => {
  return (
   <>
   <Mainvideo>
{/* <video autoPlay muted loop className='video-1'>
    <source src={rsp} type="video/mp4"></source>
</video> */}
<MainvideoContent>
<h1 className='kotation'>జై భీం, జై సేవలాల్, జై కొమరం భీం, జై భారత్</h1>
	<Images >
	<img src={Ambedkhar} alt='' className='img'></img>
	<img src={Sevalal} alt='' className='img'></img>
	<img src={Komaram} alt='' className='img'></img>
	</Images>
    <h1 className='text'>Rsp Girijanasena</h1>
</MainvideoContent>
   </Mainvideo>

<br />
<br />
   <SectionOne>
     <SectionOneHeader>
       Aims & Objectives:-
       <center><hr style={{width:'200px', border:'1.5px solid blue',borderRadius:'4px'}}/></center>
       </SectionOneHeader>
       
<StyledRow>
  <StyledCol xs={11} className='sectiononecol'>
<CardOneContent>The aims and objectives of RSP GIRIJANA SENA is as follows:-
<li>To Empower Unity & Strength in Tribes Youth.</li>
<li>To Empower Education, Health & Wealth of Girijans.</li>
<li>To Empower Youth to develop a strong and healthy Young Generation.</li>
<li>To organize Tribal Festivals.</li>
<li>To Organize National & International Important days.</li>
<li>To insist Social Values and Promo community service to strengthen
Nationalism in the Country.</li>
<li>To implement Sustainable Programmes in the Economic, Social, sports &
culture for the advancement of youth through institutional means.</li>
<li>To organize Youth Activities in coordination with youth clubs/
Associations, NGO's, Youth Awardees and others.</li>
<li>To Avoid child Marriages & to prohibit Dowry's.</li>
<li>To organize summer coaching camps in cultural wing for youth.</li>
<li>To impart Voter education.</li>
<li>To Promote Constitutional values.</li>
<li>To carry out such other activities and programmes for the benefit of tribal
community.</li>
</CardOneContent>
  </StyledCol>
</StyledRow>
   </SectionOne>
<Achivements>
<SectionOneHeader>
      Achievements
       <center><hr style={{width:'80px', border:'1.5px solid blue',borderRadius:'4px'}}/></center>
       </SectionOneHeader>
  <StyledRow>
    <StyledCol md={4}>
    <Card className='card'>
      <Card.Body>
      <CardImage> <img src={Poorna} alt='' className='image'></img></CardImage>
        <Card.Text className='text'>
<span>Malavath Purna</span> Place of Birth: Pakhal Village, Sirikonda Mandal, Nizamabad District,
Parents: Lakshmi-Devadas,
Born:2000/January/10,
On May 25, 2014, she became the youngest girl (13 years 11 months) to climb Mount Everest, the highest mountain in Asia.
A mountaineer, she has climbed the seven highest peaks in the seven continents of the world.
        </Card.Text>
      </Card.Body>
    </Card>
    </StyledCol>
    <StyledCol md={4}>
    <Card className='card'>
      <Card.Body>
      <CardImage> <img src={Sindhu} alt='' className='image'></img></CardImage>
        <Card.Text className='text'>
	<span>Gugulothu Sindhu </span>Place of Birth: Suryapet District, Chivvemla Mandal, Panwa Banda Thanda,
Parents: Sushila-Mansingh,
Born:2002/ March/05,
Gugulothu Sindhu is a tribal child who comes from a remote village where he is not familiar with the world. Telangana State Aviation Academy offers Integrated M.Sc and Aircraft Maintenance Engineering course.
        </Card.Text>
      </Card.Body>
    </Card>
    </StyledCol>
    <StyledCol md={4}>
    <Card className='card'>
      <Card.Body>
      <CardImage> <img src={Anitha} alt='' className='image'></img></CardImage>
        <Card.Text className='text'>
		<span>Kunjam Anita </span>Place of Birth: Raianipeta,
Far away from the modern world, somewhere in the forest, a tribal child, Kunjam Anita, is studying in the Miranda House of Delhi University, the capital of our country, from Rayanipeta, where they continue to live on resources. There is no drinking water in her house.
        </Card.Text>
      </Card.Body>
    </Card>
    </StyledCol>
  </StyledRow>
</Achivements>


   <SectionThree> 
     
    </SectionThree>

   <SectionFour> 
   <SectionOneHeader>
   Tribal leaders
       <center><hr style={{width:'80px', border:'1.5px solid blue',borderRadius:'4px'}}/></center>
       </SectionOneHeader>
   <SectionFourCard>
     <StyledRow>
       <StyledCol md={8}>
         <CardOneContent>
		 Sevalal Maharaj was an Indian socio-religious reformer and is now revered by the Banjara community as a spiritual guru. He was a disciple of Jagadamba and was celibate throughout his life. Sri Sevalal played key role in fighting for Banjaras rights with Nizam ruler and Mysuru ruler in 18th century.
		Birth anniversary: 1739/ February/15 and Death anniversary: 1773/January/2
       </CardOneContent>
       </StyledCol>
       <StyledCol md={4}>
<CardImage> <img src={Sevalal} alt='' className='image'></img></CardImage>
</StyledCol>

     </StyledRow>
     </SectionFourCard>
   </SectionFour>
<SectionFive>

<SectionFourCard className='sectionfivecard'>
     <StyledRow>
     <StyledCol md={4}>
<CardImage> <img src={Komaram} alt='' className='image'></img></CardImage>
</StyledCol>
       <StyledCol md={8}>
         <CardOneContent>
		 Komaram Bheem  was a revolutionary leader in Hyderabad State of British India from the Gond tribes. Bheem, in association with other Gond leaders, led a protracted low intensity rebellion against the feudal Nizams of Hyderabad in the eastern part of the princely state during the 1930s, which contributed in the culmination of the Telangana Rebellion of 1946.   Birth anniversary: 1901/October/22 and Death anniversary: 1940/ October/27
       </CardOneContent>
       </StyledCol>
       

     </StyledRow>
     </SectionFourCard>
</SectionFive>
<SectionFour> 
   <SectionFourCard>
     <StyledRow>
       <StyledCol md={8}>
         <CardOneContent>
		 Birsa Munda pronunciation was an Indian tribal freedom fighter, religious leader, and folk hero who belonged to the Munda tribe. He spearheaded a tribal religious millenarian movement that arose in the Bengal Presidency (now Jharkhand) in the late 19th century, during the British Raj, thereby making him an important figure in the history of the Indian independence movement. Birth anniversary: 1875/ November/15 and Death anniversary: 1900/ June/9
       </CardOneContent>
       </StyledCol>
       <StyledCol md={4}>
<CardImage> <img src={Birsa} alt='' className='image'></img></CardImage>
</StyledCol>

     </StyledRow>
     </SectionFourCard>
   </SectionFour>
   <SectionTwo>
<SectionOneHeader>
      Culture
       <center><hr style={{width:'80px', border:'1.5px solid blue',borderRadius:'4px'}}/></center>
       </SectionOneHeader>
  <StyledRow>
    <StyledCol md={4}>
    <Card className='card'>
      <Card.Body>
      <CardImage> <img src={Sevalal} alt='' className='image'></img></CardImage>
        <Card.Text className='text'>
        Sevalal Maharaj was one of the great spiritual gurus of the Banjara community and had fought for the political rights of the community.....
        </Card.Text>
      </Card.Body>
    </Card>
    </StyledCol>
    <StyledCol md={4}>
    <Card className='card'>
      <Card.Body>
      <CardImage> <img src={Gussadi} alt='' className='image'></img></CardImage>
        <Card.Text className='text'>
        Gusadi tribal dance The Gusadi Dance of Gonds is the biggest festival for Raj Gonds of Adilabad dist. in Telangana When the harvest is over.....
        </Card.Text>
      </Card.Body>
    </Card>
    </StyledCol>
    <StyledCol md={4}>
    <Card className='card'>
      <Card.Body>
      <CardImage> <img src={Nagoba} alt='' className='image'></img></CardImage>
        <Card.Text className='text'>
        The Gonds of Adilabad district celebrate Nagoba Jatara every year on the full moon day of Magha month .....
        </Card.Text>
      </Card.Body>
    </Card>
    <ReadMore> <Link to="/culture" className='link'>Read more..</Link></ReadMore>
    </StyledCol>
  </StyledRow>
</SectionTwo>

   <br /><br />
   </>
  )
}

export default Home