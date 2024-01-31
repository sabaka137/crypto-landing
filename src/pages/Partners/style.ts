import styled from "styled-components";
import { PageTitle } from "../../components/style";

export const PageContainer = styled.div`
 width: 100%;
 margin: 140px auto;
 @media (max-width: 550px) {
  margin: 0px auto;
 }
`;

export const Title = styled(PageTitle)`
 @media (max-width: 1000px) {
  font-size: 50px;
 }
 @media (max-width: 767px) {
  font-size: 40px;
 }
 @media (max-width: 467px) {
  font-size: 32px;
 }
`;

export const PartnersContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 50px;
 margin-top: 90px;
 @media (max-width: 767px) {
  margin-top: 40px;
 }
 @media (max-width: 467px) {
  font-size: 32px;
 }
`;

export const PartnersRow = styled.div`
 width: 80%;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 100px;
 @media (max-width: 767px) {
  flex-wrap: wrap;
  width: 90%;
  gap: 40px;
 }
`;

export const PartnerItem = styled.div<{ lastRow?: boolean }>`
 width: 180px;
 img {
  width: 100%;
  height: 100%;
 }
 @media (max-width: 1300px) {
  width: ${(props) => (props.lastRow ? "20%" : "25%")};
 }
 @media (max-width: 767px) {
  width: 30%;
 }
`;
