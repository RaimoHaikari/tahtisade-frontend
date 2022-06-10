import {
    FooterContainer,
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FacebookIcon,
    TwitterIcon
} from './footerElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/about'>Mitä ihmettä</FooterLink>
                            <FooterLink to='/contact'>Ota yhteyttä</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/about'>Instagram</FooterLink>
                            <FooterLink to='/contact'>Github</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>dolla</SocialLogo>
                        <WebsiteRights>Raimo Haikari © {new Date().getFullYear()} Kaikki oikeudet pidätetään.</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">   
                                <FacebookIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">   
                                <TwitterIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">   
                                <FacebookIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">   
                                <TwitterIcon />
                            </SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;