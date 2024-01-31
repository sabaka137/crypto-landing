import React from "react";
import { PageContainer, PartnerItem, PartnersContainer, PartnersRow, Title } from "./style";
import l1 from "../../assets/Partners/binance.png";
import l2 from "../../assets/Partners//BinanceSmartChain.png";
import l3 from "../../assets/Partners/Domains.png";
import l4 from "../../assets/Partners/Simplex.png";
import l5 from "../../assets/Partners/bga.png";
import l6 from "../../assets/Partners/bybit.png";
import l7 from "../../assets/Partners/chainlink.png";
import l8 from "../../assets/Partners/crypto.png";
import l9 from "../../assets/Partners/hhbbo.png";
import l10 from "../../assets/Partners/mexc.png";
import l11 from "../../assets/Partners/tiktok.png";
type Props = {};

function Partners({}: Props) {
 return (
  <PageContainer>
   <Title>Our partners</Title>
   <PartnersContainer>
    <PartnersRow>
     <PartnerItem>
      <img src={l1} />
     </PartnerItem>
     <PartnerItem>
      <img src={l2} />
     </PartnerItem>{" "}
     <PartnerItem>
      <img src={l3} />
     </PartnerItem>{" "}
     <PartnerItem>
      <img src={l4} />
     </PartnerItem>
    </PartnersRow>
    <PartnersRow>
     <PartnerItem>
      <img src={l5} />
     </PartnerItem>{" "}
     <PartnerItem>
      <img src={l6} />
     </PartnerItem>{" "}
     <PartnerItem>
      <img src={l7} />
     </PartnerItem>{" "}
     <PartnerItem>
      <img src={l8} />
     </PartnerItem>
    </PartnersRow>
    <PartnersRow>
     <PartnerItem lastRow>
      <img src={l9} />
     </PartnerItem>{" "}
     <PartnerItem lastRow>
      <img src={l10} />
     </PartnerItem>{" "}
     <PartnerItem lastRow>
      <img src={l11} />
     </PartnerItem>
    </PartnersRow>
   </PartnersContainer>
  </PageContainer>
 );
}

export default Partners;
