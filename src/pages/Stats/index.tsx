import React, { useEffect, useRef } from "react";
import { FloatingItem, PageContainer, StatsContainer, StatsCount, StatsMark } from "./style";
import { PageTitle } from "../../components/style";

import FloatingCircle from "../../assets/floatingCircle.png";
type Props = {};

function StatsPage({}: Props) {
 useEffect(() => {
  window.addEventListener("scroll", () => {
   // if increase number, rotation will slower
   // if decrease number, rotation will faster
   const rotationSpeed = 7;

   itemRef.current!.style.transform = "rotate(" + window.scrollY / rotationSpeed + "deg)";
  });
 }, []);
 const itemRef = useRef<HTMLImageElement>(null);
 return (
  <PageContainer>
   <StatsContainer>
    <div>
     <StatsCount>38</StatsCount>
     <StatsMark>Employees</StatsMark>
    </div>
    <div>
     <StatsCount>26k</StatsCount>
     <StatsMark>Contract holders</StatsMark>
    </div>
    <div>
     <StatsCount>5000</StatsCount>
     <StatsMark>NFT Holde</StatsMark>
    </div>
    <div>
     <StatsCount>3</StatsCount>
     <StatsMark>Products</StatsMark>
    </div>
    <div>
     <StatsCount>10m</StatsCount>
     <StatsMark>Funded</StatsMark>
    </div>
    <FloatingItem ref={itemRef}>
     <img src={FloatingCircle} />
    </FloatingItem>
   </StatsContainer>
  </PageContainer>
 );
}

export default StatsPage;
