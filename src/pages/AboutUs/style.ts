import styled from "styled-components";

export const PageContainer = styled.div`
 width: 100%;
 margin: 0 auto;
 @media (max-width: 1350px) {
  margin-top: -120px;
 }
 @media (max-width: 1250px) {
  margin-top: 40px;
 }
`;

export const LogosContainer = styled.div`
 display: none;
 justify-content: center;
 @media (max-width: 1440px) {
  display: flex;
 }
 @media (max-width: 1250px) {
  display: flex;
 }
`;

export const LogoItem = styled.div`
 width: auto;
 img {
  width: 100%;
  height: auto;
 }
 @media (max-width: 1000px) {
  width: 160px;
 }
`;

export const AboutText = styled.div`
 font-size: 16px;
 font-family: Inter;
 color: #ebebeb;
 max-width: 800px;
 margin: 0 auto;
 text-align: center;
 line-height: 26px;
 margin-top: -60px;
 @media (max-width: 1440px) {
  margin-top: -40px;
 }
 @media (max-width: 1250px) {
  margin-top: 10px;
 }
 @media (max-width: 767px) {
  font-size: 14px;
  line-height: 20px;
  max-width: 80%;
 }
`;
