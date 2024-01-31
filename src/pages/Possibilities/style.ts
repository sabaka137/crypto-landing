import styled from "styled-components";
import { PageTitle } from "../../components/style";

export const PageContainer = styled.div`
 width: 100%;
 margin: 120px auto;
 position: relative;
`;
export const Title = styled(PageTitle)`
 @media (max-width: 1000px) {
  font-size: 50px;
  letter-spacing: 0px;
 }
`;

export const SubTitle = styled.div`
 text-align: center;
 font-size: 16px;
 max-width: 800px;
 line-height: 26px;
 letter-spacing: px;
 color: #ebebeb;
 margin: 20px auto;
 font-family: Inter, sans-serif;
 font-weight: 300;

 @media (max-width: 1000px) {
  margin-top: 20px;
  line-height: 20px;
  width: 80%;
  font-size: 14px;
 }
`;

export const PossibilitiesContainer = styled.div`
 width: 1200px;
 margin: 170px auto;
 display: flex;
 z-index: 4;
 position: relative;
 justify-content: center;
 gap: 30px;
 flex-wrap: wrap;
 @media (max-width: 1215px) {
  width: 740px;
 }
 @media (max-width: 1000px) {
  margin: 100px auto;
 }
 @media (max-width: 764px) {
  max-width: 100%;
 }
`;

export const PossibilitiesItem = styled.div`
 width: 320px;
 border-radius: 25px;
 @media (max-width: 467px) {
  width: 280px;
 }
`;
export const PossibilitiesItemTopBar = styled.div<{ background: string }>`
 background: red;
 width: 320px;
 height: 68px;
 margin-bottom: -4px;
 position: relative;
 background: ${(props) => `center / contain no-repeat url(${props.background})`};
 @media (max-width: 467px) {
  width: 280px;
 }
`;
export const PossibilitiesLogo = styled.img`
 position: absolute;
 left: 30px;
 top: 20px;
`;
export const PossibilitiesItemContent = styled.div`
 background: #222325;
 padding: 30px;
 border-radius: 0px 0px 25px 25px;
 box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px 1px;
 @media (max-width: 1000px) {
  padding: 30px 20px 20px;
 }
 @media (max-width: 467px) {
  padding: 20px;
 }
`;

export const PossibilitiesTitleContainer = styled.div`
 height: 77px;

 @media (max-width: 1000px) {
  height: 65px;
 }
`;
export const PossibilitiesTitle = styled.div`
 color: #ebebeb;
 font-size: 29px;
 font-family: Inter;
 font-weight: 900;
 @media (max-width: 1000px) {
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
 }
 @media (max-width: 467px) {
  font-size: 18px;
 }
`;
export const PossibilitiesSubTitle = styled.div`
 color: #ebebeb;
 font-size: 16px;
 font-family: Inter, sans-serif;
 height: 160px;
 font-weight: 300;
 line-height: 26px;
 margin-top: 20px;
 @media (max-width: 1000px) {
  font-size: 14px;

  line-height: 20px;
  font-weight: 300;
  height: 120px;
 }
 @media (max-width: 467px) {
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
 }
`;
export const PossibilitiesMark = styled.div`
 font-size: 10px;
 color: #f231af;
 font-family: Inter;
 font-weight: Bold;
 text-transform: uppercase;
 margin-top: 20px;
 background: #272d28;
 height: 25px;
 width: 90px;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 25px;
`;

export const FloatingItem = styled.div`
 width: 210px;
 position: absolute;
 top: 0%;
 right: 0%;

 img {
  width: 100%;
 }
 @media (max-width: 767px) {
  width: 120px;
 }
 @media (max-width: 467px) {
  display: none;
 }
`;
