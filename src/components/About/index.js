import React from 'react'
import Img1 from '../../images/about/about.jpg'
import { Container, StyledRow, StyledCol, MainCard, MainImage, Overlay, MainText, CardTwo, CardOneContent, CardImage, CardOne, CardOneSection,CardThree } from './styles'
const About = () => {
  return (
    <>
      <Container>
        <MainCard>
          <MainImage>
            <Overlay>
              <MainText>About</MainText>
            </Overlay>
          </MainImage>
        </MainCard>
        <CardOne>
          <CardOneSection>
            <StyledRow>
              <StyledCol md={4}>
                <CardImage> <img src={Img1} alt='' className='image'></img></CardImage>
              </StyledCol>
              <StyledCol md={8}>
                <CardOneContent>
                  RSP Girijanasena 
                  To resolve Girijana issues in Telangana state,
                  RSP Girijanasena  will help for education, health, employment, political growth of
                  Tribal to do many programs under the auspices.
                  The organization formed with the leaders is the RSP Girijanasena.
                  Dr. RS Praveen Kumar Idea
                  Approach small villages, and other Girijanasena peoples,
                  To take away, Bahujan's statehood is the ultimate goal
                  RSP Girijanasena will work.
                </CardOneContent>
              </StyledCol>
            </StyledRow>
          </CardOneSection>
        </CardOne>
        <CardTwo>
          <StyledRow>
            <StyledCol xs={11} className="cardone">
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
        </CardTwo>
        {/* <CardThree>
        <StyledRow>
            <StyledCol sm={6} className="commands">
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
        </CardThree> */}
       
      </Container>


    </>
  )
}

export default About