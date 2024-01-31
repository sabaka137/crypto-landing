import styled from "styled-components";
import { PageTitle } from "../../components/style";

export const PageContainer = styled.div<{ background: string }>`
 width: 100%;
 margin: 160px auto;
 height: 578px;
 background: ${(props) => `center / cover no-repeat url(${props.background})`};
 background-position-y: 0px;
 display: flex;
 align-items: center;
 position: relative;
 margin-bottom: 0px;
 @media (max-width: 1000px) {
  height: 430px;
  
 @media (max-width: 767px) {
  height: 340px;
  margin:10px auto;
 }
`;

export const Title = styled(PageTitle)`
 z-index: 4;
 @media (max-width: 1000px) {
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 0px;
 }
 @media (max-width: 767px) {
  font-size: 40px;
 }
 @media (max-width: 470px) {
  font-size: 32px;
  line-height: 40px;
 }
`;
export const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 width: 100%;
 justify-content: center;
 align-items: center;
`;

export const Subtitle = styled.div`
 font-family: Inter;
 font-size: 16px;
 width: 100%;
 color: #ebebeb;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 gap: 4px;
 font-weight: 300;
 margin-top: 20px;
 span {
  color: #f231af;
 }
 @media (max-width: 1000px) {
  font-size: 14px;
  line-height: 20px;
 }
`;
export const Button = styled.a`
 margin-top: 60px;
 background-color: #f231af;
 cursor: pointer;
 padding: 16px 30px;
 border-radius: 8px;
 font-family: Inter, sans-serif;
 font-size: 16px;
 font-weight: 600;
 color: #ebebeb;
 &:hover {
  background-image: linear-gradient(
   90deg,
   #f231af,
   #a64be1 19%,
   #8257f9 37%,
   #a871ad 49%,
   #8e55f8 68%,
   #f231af
  );
 }
 @media (max-width: 767px) {
  margin-top: 40px;
  padding: 14px 20px;
  font-size: 14px;
 }
`;

export const FloatingItem = styled.div<{ rotationRate?: number }>`
 width: 210px;
 position: absolute;
 top: 14%;
 right: 6%;
 img {
  width: 100%;
 }
 @media (max-width: 1000px) {
  width: 120px;
  top: 0%;
 }
 @media (max-width: 767px) {
  width: 80px;
  top: 4%;
 }
`;
