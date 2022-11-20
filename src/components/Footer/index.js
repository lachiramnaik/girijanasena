import React from 'react'
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FooterContainer, StyledRow, StyledCol, FooterHeader, SocialIcons, Text, SocialDev ,AddersText,CopyRight,FooterCard,Contact} from './styles'
const Footer = () => {
    return (
        <>
      
            <FooterContainer>
                <StyledRow>
                    <StyledCol md={4}>
<FooterCard>
                        <FooterHeader>Our Links</FooterHeader>
                        <center><hr style={{width:'120px', border:'1.5px solid #ffffff',borderRadius:'4px'}} /></center>
                        <p><a href="https://www.bsp4ts.com/" className='links'>BSP Telangana</a></p>
                        <p><Link to="/calender" className='links'>Calender</Link></p>
                      
    
                        </FooterCard>
                    </StyledCol>
                    <StyledCol md={4}><FooterCard>
                        <FooterHeader>Follow Us</FooterHeader>
                        <center><hr style={{width:'120px', border:'1.5px solid #ffffff',borderRadius:'4px'}} /></center>
                        <SocialDev>
                            <SocialIcons >
								<a href="https://twitter.com/RSPGIRIJANASENA?t=zyyExaH5p9XUH7HSAP0NmA&s=08" className='socialicon'>
                                <BsTwitter size={20}></BsTwitter>
                                <Text>Twitter &nbsp; &nbsp; &nbsp;</Text>
								</a>
                            </SocialIcons>
                            <SocialIcons>
							<a href="https://www.facebook.com/RSPGIRIJANASENA/" className='socialicon'>
                                <BsFacebook size={20}></BsFacebook>
                                <Text>Facebook</Text>
								</a>
                            </SocialIcons>
                            <SocialIcons>
							<a href="https://instagram.com/rspgirijanasena?igshid=YmMyMTA2M2Y=" className='socialicon'>
                                <BsInstagram size={20}></BsInstagram>
                                <Text>Instagram</Text>
								</a>
                            </SocialIcons>
                        </SocialDev>
                        </FooterCard>
                    </StyledCol>
                    <StyledCol md={4}>
                        <FooterCard>
                        <FooterHeader>Address</FooterHeader>
                        <center><hr style={{width:'120px', border:'1.5px solid #ffffff',borderRadius:'4px'}} /></center>
<AddersText>Flat No. 301, H, No ;10-2-353/354,AJ Hamara Residency,Asifnagar X Roads, Vijayanagar Colony, Near
Masab Tank, Hyderabad
</AddersText>
<Contact>
<a className='contact' href="mailto:rspgirijanasena@gmail.com">Mail:- rspgirijanasena@gmail.com</a>
<a className='contact' href="tel:91 9502009941">Cell:- (+91)-9502009941 </a>
</Contact>
</FooterCard>
                    </StyledCol>
                </StyledRow>
                <CopyRight>All rights reserved ©2022 Rsp Girijanasena
					<br />
					Website Designed and developed by Lachiramnaik
				</CopyRight>
            </FooterContainer>
           
        </>
    )
}

export default Footer