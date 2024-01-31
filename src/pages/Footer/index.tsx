import React from "react";
import {
 CopyrightText,
 FooterBottom,
 FooterTop,
 FooterTopLinks,
 LinksItem,
 LocationText,
 LogoContainer,
 PageContainer,
 SocialContainer,
 SocialItem,
} from "./style";
import Logo from "../../assets/Logo.svg";
import DiscordLogo from "../../assets/footer/DiscordLogo.svg";
import InstLogo from "../../assets/footer/instLogo.svg";
import TwitterLogo from "../../assets/footer/twitterLogo.svg";
import FacebookLogo from "../../assets/footer/facebookLogo.svg";
import TelegramLogo from "../../assets/footer/telegramLogo.svg";
type Props = {};

function Footer({}: Props) {
 return (
  <PageContainer>
   <FooterTop>
    <LogoContainer>
     <img src={Logo} />
    </LogoContainer>
    <FooterTopLinks>
     <LinksItem>Kmon Universe</LinksItem>
     <LinksItem>Blog</LinksItem>
     <LinksItem>Careers </LinksItem>
     <LinksItem>Academy</LinksItem>
    </FooterTopLinks>
   </FooterTop>

   <FooterBottom>
    <CopyrightText>© 2023 Pink Moon Studios. All rights reserved.</CopyrightText>
    <SocialContainer>
     <SocialItem>
      <img src={DiscordLogo} />
     </SocialItem>
     <SocialItem>
      <img src={TwitterLogo} />
     </SocialItem>
     <SocialItem>
      <img src={InstLogo} />
     </SocialItem>
     <SocialItem>
      <img src={TelegramLogo} />
     </SocialItem>
     <SocialItem>
      <img src={FacebookLogo} />
     </SocialItem>
    </SocialContainer>
   </FooterBottom>
   <LocationText>
    Pink Moon Studio Ltd | 10 ANSON ROAD #13-09 INTERNATIONAL PLAZA SINGAPORE 079903
   </LocationText>
  </PageContainer>
 );
}

export default Footer;
