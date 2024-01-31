import React from "react";
import { CEOInfoContainer, CEOName, CEOPhoto, CEORole, PageContainer, Title } from "./style";
import CeoPhoto from "../../assets/Photo.png";
type Props = {};

function CeoAboutPage({}: Props) {
 return (
  <PageContainer>
   <Title>
    As a player, I believe the time invested in building a character and advancing in a game should
    be cherished and respected.
   </Title>
   <CEOInfoContainer>
    <CEOPhoto>
     <img src={CeoPhoto} />
    </CEOPhoto>
    <CEOName>Umberto Canessa Cerchi</CEOName>
    <CEORole>CEO The Kryptomon Company</CEORole>
   </CEOInfoContainer>
  </PageContainer>
 );
}

export default CeoAboutPage;
