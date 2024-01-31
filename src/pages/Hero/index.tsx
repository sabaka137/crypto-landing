import React, { useEffect, useRef, useState } from "react";
import {
 BottomBar,
 FloatingBagel,
 FloatingItem,
 HeroTitle,
 LogoContainer,
 LogoItem,
 LogosContainer,
 PageContainer,
 ScrollButtonContainer,
 ScrollText,
 SubTitle,
 Wrapper,
} from "./style";
import Logo from "../../assets/Logo.svg";
import BG from "../../assets/BG.jpg";
import FloatingImg from "../../assets/FloatingItem.png";
import Bagel from "../../assets/FloatingItemS2.png";
import Mouse from "../../assets/mouse.svg";
import Logo1 from "../../assets/Logo1.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo3 from "../../assets/Logo3.svg";
import Logo4 from "../../assets/Logo4.svg";
type Props = {};

function HeroPage({}: Props) {
 useEffect(() => {
  window.addEventListener("scroll", () => {
   // if increase number, rotation will slower
   // if decrease number, rotation will faster
   const rotationSpeed = 4;
   const bagelRotationSpeed = 7;
   itemRef.current!.style.transform = "rotate(" + window.scrollY / rotationSpeed + "deg)";
   bagelRef.current!.style.transform = "rotate(" + window.scrollY / bagelRotationSpeed + "deg)";
  });
 }, []);
 const itemRef = useRef<HTMLImageElement>(null);
 const bagelRef = useRef<HTMLImageElement>(null);
 return (
  <PageContainer background={BG}>
   <Wrapper>
    <LogoContainer>
     <img src={Logo} />
    </LogoContainer>
    <HeroTitle>We make blockchain gaming accessible to everyone</HeroTitle>
    <SubTitle>
     At PinkMoon Studio, our mission is to bridge Web2 and Web3 games with the use of Web3
     technology for a more fair and enhanced player experience. We push gaming innovation and
     prioritize transparency, security, and inclusivity in our community.
    </SubTitle>
   </Wrapper>
   <FloatingItem ref={itemRef}>
    <img src={FloatingImg} />
   </FloatingItem>
   <FloatingBagel ref={bagelRef}>
    <img src={Bagel} />
   </FloatingBagel>
   <BottomBar>
    <ScrollButtonContainer onClick={() => window.scrollTo({ behavior: "smooth", top: 1500 })}>
     <img src={Mouse} />
     <ScrollText>Scroll to explore</ScrollText>
    </ScrollButtonContainer>
    <LogosContainer>
     <LogoItem>
      <img src={Logo4} />
     </LogoItem>
     <LogoItem>
      <img src={Logo3} />
     </LogoItem>
     <LogoItem>
      <img src={Logo2} />
     </LogoItem>
     <LogoItem>
      <img src={Logo1} />
     </LogoItem>
    </LogosContainer>
   </BottomBar>
  </PageContainer>
 );
}

export default HeroPage;
