import React, { useEffect, useRef } from "react";
import {
 FloatingItem,
 PageContainer,
 PossibilitiesContainer,
 PossibilitiesItem,
 PossibilitiesItemContent,
 PossibilitiesItemTopBar,
 PossibilitiesLogo,
 PossibilitiesMark,
 PossibilitiesSubTitle,
 PossibilitiesTitle,
 SubTitle,
 Title,
} from "./style";
import { PageTitle } from "../../components/style";
import TopBarImage from "../../assets/Posibilities/ItemTopBar.png";
import Square from "../../assets/Posibilities/FloatingSquare.png";
import Logo1 from "../../assets/Posibilities/ItemLogo.svg";
import { PossibilitiesData } from "./data";

type Props = {};

function Possibilities({}: Props) {
 const itemRef = useRef<HTMLImageElement>(null);
 const pageRef = useRef<HTMLImageElement>(null);
 useEffect(() => {
  window.addEventListener("scroll", () => {
   const pageTop =
    pageRef.current!.getBoundingClientRect().top + window.scrollY - window.innerHeight;
   const pageBottom = pageRef.current!.getBoundingClientRect().bottom + window.scrollY - 400;

   if (window.scrollY > pageTop && window.scrollY < pageBottom) {
    itemRef.current!.style.transform = `translate(0,${(window.scrollY - pageTop) / 2}px)`;
   }
  });
 }, []);
 return (
  <PageContainer ref={pageRef}>
   <Title>Gaming solutions, amplified.</Title>
   <SubTitle>
    Despite encountering numerous technical challenges during the game development process, we
    persevered and ultimately produced cutting-edge blockchain gaming solutions.
   </SubTitle>
   <PossibilitiesContainer>
    {PossibilitiesData.map((item) => (
     <PossibilitiesItem key={item.id}>
      <PossibilitiesItemTopBar background={TopBarImage}>
       <PossibilitiesLogo src={item.logo}></PossibilitiesLogo>
      </PossibilitiesItemTopBar>
      <PossibilitiesItemContent>
       <PossibilitiesTitle>
        <PossibilitiesTitle>{item.title.firstWord}</PossibilitiesTitle>
        <PossibilitiesTitle>{item.title.secondWord}</PossibilitiesTitle>
       </PossibilitiesTitle>
       <PossibilitiesSubTitle>{item.subtitle}</PossibilitiesSubTitle>
       <PossibilitiesMark>{item.mark}</PossibilitiesMark>
      </PossibilitiesItemContent>
     </PossibilitiesItem>
    ))}
   </PossibilitiesContainer>
   <FloatingItem ref={itemRef}>
    <img src={Square} />
   </FloatingItem>
  </PageContainer>
 );
}

export default Possibilities;
