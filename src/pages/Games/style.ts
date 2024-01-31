import styled from "styled-components";

export const PageContainer = styled.div`
 width: 100%;
 margin: 70px auto;
`;

export const Title = styled.div`
 font-size: 60px;
 font-family: Inter;
 color: #ebebeb;
 font-weight: 900;
 text-align: center;
 @media (max-width: 767px) {
  font-size: 40px;
 }
`;

export const GamesContainer = styled.div`
 margin-top: 180px;
 display: flex;
 justify-content: center;
 gap: 20px;
 @media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin-top: 100px;
 }
`;

export const GamesItem = styled.div`
 width: 320px;
 background: #222325;
 border-radius: 25px;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
 @media (max-width: 467px) {
  max-width: 280px;
 }
`;

export const GamesItemBackground = styled.div`
 overflow: hidden;
 height: 206px;
 border-radius: 25px 25px 0px 0px;
 img {
  width: 100%;
  height: 100%;
 }
`;
export const GamesItemImage = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 25px 25px 0px 0px;
 height: 206px;
 position: relative;
`;
export const GamesItemFlotingImage = styled.img`
 position: absolute;
 bottom: 0;
 z-index: 2;
 width: 100%;
 height: auto;
 transition: 0.6s ease all;
 cursor: pointer;
 &:hover {
  transform: scale(1.1, 1.1) translate(0px, -11px);
 }
`;
export const GamesItemContent = styled.div`
 padding: 40px;
 @media (max-width: 1000px) {
  padding: 30px;
 }
 @media (max-width: 467px) {
  padding: 20px;
 }
`;

export const GameName = styled.div`
 color: #ebebeb;
 font-size: 29px;
 font-family: Inter;
 font-weight: Bold;
 @media (max-width: 1000px) {
  font-size: 22px;
 }
 @media (max-width: 467px) {
  font-size: 18px;
 }
`;

export const GameDescription = styled.div`
 color: #ebebeb;
 font-size: 16px;
 font-family: Inter, sans-serif;
 font-weight: 300;
 line-height: 26px;
 margin-top: 20px;
 @media (max-width: 1000px) {
  margin-top: 10px;
  font-size: 14px;
 }
 @media (max-width: 467px) {
  font-size: 12px;
  line-height: 18px;
 }
`;

export const BottomBar = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 40px;
 @media (max-width: 1000px) {
  margin-top: 20px;
 }
`;
export const LearnButton = styled.a<{ commonColor: string }>`
 display: flex;
 font-family: Inter;
 font-size: 16px;
 font-weight: 400;
 color: ${(props) => props.commonColor};
 cursor: pointer;
 text-decoration: none;
 justify-content: space-between;
 &:hover {
  color: #f231af;
 }
`;
