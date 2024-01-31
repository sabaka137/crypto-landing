import styled from "styled-components";

export const PageContainer = styled.div<{ background: string }>`
 width: 100%;
 height: 1800px;
 background: ${(props) => `center / contain no-repeat url(${props.background})`};
 padding-top: 100px;
 background-position-y: -120px;

 position: relative;
 @media (max-width: 1650px) {
  height: 1400px;
  background-position-y: -60px;
 }
 @media (max-width: 1440px) {
  background-position-y: -0px;
 }
 @media (max-width: 1250px) {
  background: ${(props) => `center / cover no-repeat url(${props.background})`};
  padding-top: 40px;
  background-position-y: -60px;
  height: 1150px;
 }
 @media (max-width: 1000px) {
  height: 950px;
 }
`;

export const FloatingItem = styled.div`
 width: 210px;
 position: absolute;
 top: 38%;
 right: 10%;

 img {
  width: 100%;
 }
 @media (max-width: 1440px) {
  top: 57.3%;
  width: 180px;
 }
 @media (max-width: 1280px) {
  top: 46.3%;
  right: 9%;
  width: 170px;
 }
 @media (max-width: 1000px) {
  width: 110px;
  top: 36%;
  right: 9%;
 }
 @media (max-width: 1250px) {
  width: 75px;
  top: 26%;
  right: 5%;
 }
`;

export const FloatingBagel = styled.div`
 position: absolute;
 width: 245px;
 top: 47%;
 left: 12%;
 img {
  width: 100%;
 }
 @media (max-width: 1440px) {
  top: 60.5%;
  left: 11%;
  width: 180px;
 }
 @media (max-width: 1000px) {
  width: 120px;
  top: 50%;
  right: 9%;
 }
 @media (max-width: 1250px) {
  width: 100px;
  top: 42%;
  right: 4%;
 }
`;
export const Wrapper = styled.div`
 width: 900px;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 @media (max-width: 1000px) {
  width: auto;
 }
`;

export const LogoContainer = styled.div`
 width: 240px;
 img {
  width: 100%;
  height: auto;
 }
 @media (max-width: 1000px) {
  width: 180px;
 }
`;

export const HeroTitle = styled.div`
 text-align: center;
 max-width: 780px;
 font-size: 60px;
 color: #ebebeb;
 font-family: Inter, sans-serif;
 font-weight: 900;
 z-index: 4;
 letter-spacing: -2px;
 line-height: 64px;
 margin-top: 100px;
 @media (max-width: 1440px) {
  max-width: 900px;
  margin-top: 80px;
 }
 @media (max-width: 1000px) {
  font-size: 50px;
  max-width: 780px;
  margin-top: 60px;
 }
 @media (max-width: 767px) {
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0px;
  width: 95%;
 }
 @media (max-width: 467px) {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -2px;
  width: 100%;
 }
`;

export const SubTitle = styled.div`
 text-align: center;
 font-size: 16px;
 max-width: 580px;
 line-height: 26px;
 letter-spacing: px;
 color: #ebebeb;
 font-family: Inter, sans-serif;
 z-index: 4;
 font-weight: 300;
 margin-top: 40px;
 @media (max-width: 1000px) {
  margin-top: 20px;
  line-height: 20px;
 }
 @media (max-width: 767px) {
  font-size: 14px;
 }
 @media (max-width: 467px) {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  width: 80%;
 }
`;

export const BottomBar = styled.div`
 position: absolute;
 position: absolute;
 bottom: 10%;
 left: 50%;
 transform: translate(-50%, 0px);
 @media (max-width: 1250px) {
  bottom: 6%;
 }
 @media (max-width: 767px) {
  bottom: 13%;
 }
`;

export const ScrollButtonContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 cursor: pointer;
`;
export const ScrollText = styled.div`
 color: #5e6b7e;
 font-size: 16px;
 font-family: Inter;
 font-weight: Bold;
 text-transform: uppercase;
 margin-top: 20px;
 @media (max-width: 1000px) {
  font-size: 10px;
  margin-top: 7px;
 }
`;

export const LogosContainer = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 60px;
 @media (max-width: 1250px) {
  margin-top: 20px;
 }
 @media (max-width: 560px) {
  flex-direction: column;
  gap: 20px;
 }
`;

export const LogoItem = styled.div`
 width: 220px;
 img {
  width: 100%;
  height: auto;
 }
 @media (max-width: 1000px) {
  width: 170px;
 }
 @media (max-width: 767px) {
  width: 120px;
 }
\
`;
