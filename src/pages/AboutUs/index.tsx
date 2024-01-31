import React from "react";
import { AboutText, LogoItem, LogosContainer, PageContainer } from "./style";

type Props = {};

function AboutUs({}: Props) {
 return (
  <PageContainer>
   <AboutText>
    Pink Moon Studio was founded in 2021 by a group of experienced gamers and industry veterans to
    bring a triple AAA Game as "web2" while we use Web3 under the hood seamless experience focusing
    only on value for the players. Since founded the company launched 2 games and got an incredible
    response from the players growing our community to more than 200K People.
   </AboutText>
  </PageContainer>
 );
}

export default AboutUs;
