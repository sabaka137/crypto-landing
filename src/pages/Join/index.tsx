import React, { useEffect, useRef, useState } from "react";
import { Button, ContentContainer, FloatingItem, PageContainer, Subtitle, Title } from "./style";
import BG from "../../assets/BgBottom.jpg";
import { PageTitle } from "../../components/style";
import FloatingImg from "../../assets/FloatingItem.png";
type Props = {};

function JoinPage({}: Props) {
 useEffect(() => {
  window.addEventListener("scroll", () => {
   // if increase number, rotation will slower
   // if decrease number, rotation will faster
   const rotationSpeed = 4;

   itemRef.current!.style.transform = "rotate(" + window.scrollY / rotationSpeed + "deg)";
  });
 }, []);
 const itemRef = useRef<HTMLImageElement>(null);
 return (
  <PageContainer background={BG}>
   <ContentContainer>
    <Title>Join one of our communities</Title>
    <Subtitle>
     Or learn all about <span> Join the Kryptomon Universe</span>
    </Subtitle>
    <Button>JOIN THE COMMUNITY</Button>
   </ContentContainer>
   <FloatingItem ref={itemRef}>
    <img src={FloatingImg} />
   </FloatingItem>
  </PageContainer>
 );
}

export default JoinPage;
