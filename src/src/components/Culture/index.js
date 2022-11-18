import React from 'react'
import { Link } from "react-router-dom";
import Sevalal from '../../images/home/sevalal.jpeg'
import Gussadi from '../../images/home/Gussadi.jpeg'
import Nagoba from '../../images/home/nagoba.webp'
import Chenchu from '../../images/home/chenchu.jpeg'
import Teej from '../../images/home/teej.jpeg'
import Sammakka from '../../images/home/sammmakka.jpeg'
import Shitla from '../../images/home/Shitla.jpeg'
import Card from 'react-bootstrap/Card';
import Yarakula from '../../images/home/Yaraakula.jpeg'
import { StyledRow, StyledCol, MainCard, Overlay, MainImage, MainText, Container, CardImage, ReadMore } from './styles'
const Culture = () => {
  return (
    <>
      <MainCard>
        <MainImage>
          <Overlay>
            <MainText>Culture</MainText>
          </Overlay>
        </MainImage>
      </MainCard>
      <Container>
        <StyledRow>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Sevalal} width={10} height={10} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Sevalal Maharaj (15 February 1739 – 4 December 1806) was an Indian socio-religious reformer and is now revered by the Banjara community as a spiritual guru. He was a disciple of Jagadamba and was celibate throughout his life. Sri Sevalal played key role in fighting for Banjaras rights with Nizam ruler and Mysuru ruler in 18th century.
                </Card.Text>
              </Card.Body>
            </Card>
          </StyledCol>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Gussadi} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Gusadi tribal dance 
The Gusadi Dance of Gonds is the biggest festival for Raj Gonds of Adilabad dist. in Telangana When the harvest is over, the Gonds' are dressed in colorful costumes, decorated with ornaments go to neighboring villages in troupes, singing and dancing.
                </Card.Text>
              </Card.Body>
            </Card>
          </StyledCol>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Nagoba} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Nagoba Jatara is a Hindu tribal festival held in Keslapur village, Inderavelly Mandal Adilabad district, Telangana, India.It is the second biggest tribal carnival and celebrated by Mesaram clan of Gond tribes for 10 days.
                </Card.Text>
              </Card.Body>
            </Card>
          </StyledCol>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Chenchu} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Chenchu tribe festivals give a ton of consideration to their divine beings. Master Eshwara is known as “Lingamayya” among them, while Shakti is known as “Maisamma” or “Peddamma.” Both male and female gods are loved alongside puja during the long stretch of “Sravan,” which runs from July to August.
                </Card.Text>
              </Card.Body>
            </Card>
           
          </StyledCol>


        </StyledRow>
        <StyledRow>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Teej} width={10} height={10} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Usually the Teej Festival is celebrated by the Lamabada tribes for 9 days. The celebration starts with sowing of wheat or Bengal gram in woven bowls on the first day which will sprout on the ninth days. The sprouts will be taken out in procession around the village in a colourful ceremony and prayers will be offered at the village temple.
                </Card.Text>
              </Card.Body>
            </Card>
          </StyledCol>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Yarakula} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Yerukala People Separate songs are sung at the time of planting, harvesting,
and when the harvest is brought to the threshing floor. In addition, there is a tradition of singing
songs early in the morning, when the wife and husband are pounding the grain. In the Yerukala
community, we can observe the practice of equal participation of men and women in the cultural activities.
                </Card.Text>
              </Card.Body>
            </Card>
          </StyledCol>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Sammakka} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Sammakka Saralamma Jatara (also Sammakka Sarakka Jatara and Medaram Jatara) is a festival to honour the Hindu Tribal goddesses, celebrated in the state of Telangana, India. This Jatara is known for witnessing one of the largest people gatherings in the world.
                </Card.Text>
              </Card.Body>
            </Card>
          </StyledCol>
          <StyledCol md={3}>
            <Card className='card'>
              <Card.Body>
                <CardImage> <img src={Shitla} alt='' className='image'></img></CardImage>
                <Card.Text className='text'>
                Seethla Amma is the goddess of the Lambadi tribal people. It is a custom of Lambadis to worship Seethla Bhavani for wealth of cattle, health of cattle and well-being of Tanda. The Banjaras believe that it will prevent diseases such as cholera from spreading.
                </Card.Text>
              </Card.Body>
            </Card>
           
          </StyledCol>


        </StyledRow>
        <ReadMore> <Link to="/calender" className='link'>visit calender for more..</Link></ReadMore>
      </Container>
    </>
  )
}
export default Culture