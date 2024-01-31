import styled from "styled-components";

export const PageContainer = styled.div`
 width: 100%;
 margin: 0 auto;
 padding: 80px;
 box-sizing: border-box;
 background: #101011;
 @media (max-width: 1000px) {
  padding: 40px;
 }
`;
export const LogoContainer = styled.div`
 width: 170px;
 img {
  width: 100%;
  height: auto;
 }
 @media (max-width: 1000px) {
  width: 140px;
 }
`;

export const FooterTop = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media (max-width: 1000px) {
  flex-direction: column;
  gap: 30px;
 }
 @media (max-width: 767px) {
  gap: 15px;
 }
`;

export const FooterTopLinks = styled.div`
 display: flex;
 gap: 40px;
 @media (max-width: 767px) {
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
 }
`;

export const LinksItem = styled.div`
 font-family: Inter;
 font-size: 16px;
 color: #ebebeb;
 font-weight: 900;
 cursor: pointer;
 &:hover {
  color: #f231af;
 }
 @media (max-width: 1000px) {
  font-size: 14px;
 }
 @media (max-width: 767px) {
  font-size: 12px;
  font-weight: 800;
 }
`;

export const FooterBottom = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 60px;
 @media (max-width: 1000px) {
  flex-direction: column;
  gap: 30px;
 }
 @media (max-width: 767px) {
  margin-top: 25px;
 }
 @media (max-width: 767px) {
  gap: 25px;
 }
`;
export const CopyrightText = styled.div`
 color: #5e6b7e;
 font-size: 12px;
 font-family: Inter;
 font-weight: 300;

 @media (max-width: 1000px) {
  order: 2;
  text-align: center;
 }
`;
export const LocationText = styled(CopyrightText)`
 text-transform: uppercase;
`;

export const SocialContainer = styled.div`
 display: flex;
 gap: 20px;
 @media (max-width: 767px) {
  gap: 10px;
 }
`;

export const SocialItem = styled.div`
 width: 40px;
 height: 40px;
 background-color: rgb(34, 35, 37);
 border-radius: 50%;
 justify-content: center;
 align-items: center;
 display: flex;
 box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px 1px;
 cursor: pointer;
 &:hover {
  background-color: #2e1d28;
  outline: 1px solid #6f5beb;
 }
`;
