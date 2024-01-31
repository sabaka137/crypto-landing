import styled from "styled-components";

export const PageContainer = styled.div`
 width: 100%;
 margin: 100px auto;
`;

export const StatsContainer = styled.div`
 max-width: 65%;
 padding: 40px 10px;
 margin: 0 auto;
 background-color: rgb(34, 35, 37);
 border: 1px rgb(0, 0, 0);
 border-radius: 25px;
 outline: rgb(85, 85, 85) 0px;
 display: flex;
 justify-content: center;
 gap: 50px;
 box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.5);
 position: relative;
 @media (max-width: 1000px) {
  max-width: 95%;
  gap: 30px;
 }
 @media (max-width: 520px) {
  flex-direction: column;
  align-items: center;
  max-width: 70%;
 }
`;

export const StatsCount = styled.div`
 color: #ebebeb;
 font-family: Inter, sans-serif;
 letter-spacing: -1px;
 font-size: 30px;
 font-weight: 700;
 line-height: 36px;
 @media (max-width: 1000px) {
  font-size: 22px;
 }
 @media (max-width: 520px) {
  text-align: center;
  font-size: 18px;
 }
`;

export const StatsMark = styled.div`
 color: #5e6b7e;
 font-family: Inter;
 font-weight: 300;
 font-size: 16px;

 @media (max-width: 1000px) {
  font-size: 14px;
 }
 @media (max-width: 520px) {
  text-align: center;
  font-size: 12px;
 }
`;

export const FloatingItem = styled.div<{ rotationRate?: number }>`
 width: 210px;
 position: absolute;
 top: 50%;
 left: -15%;

 img {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(30deg) rotateZ(96deg)
   skew(0deg, 0deg);
  width: 100%;
 }
 @media (max-width: 1000px) {
  top: 60%;
  left: 0%;
  width: 100px;
 }
 @media (max-width: 767px) {
  top: 75%;
  left: 0%;
  width: 75px;
 }
 @media (max-width: 520px) {
  bottom: -10%;
  left: -7%;
  width: 65px;
 }
`;
