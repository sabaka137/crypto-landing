import styled from "styled-components";
import { PageTitle } from "../../components/style";

export const PageContainer = styled.div`
 width: 100%;
 margin: 70px auto;
`;

export const Title = styled(PageTitle)`
 max-width: 80%;
 margin: 0 auto;
 letter-spacing: -2px;
 font-weight: 900;
 line-height: 64px;
 @media (max-width: 1000px) {
  font-size: 50px;
  line-height: 60px;
  max-width: 80%;
 }
 @media (max-width: 767px) {
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 0px;
  max-width: 90%;
 }
 @media (max-width: 467px) {
  font-size: 32px;
  line-height: 40px;
  max-width: 80%;
 }
`;

export const CEOInfoContainer = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 margin-top: 60px;
`;
export const CEOPhoto = styled.div`
 width: 70px;
 height: 70px;
 border-radius: 70px;
 overflow: hidden;
 img {
  width: 100%;
  height: 100%;
 }
`;
export const CEOName = styled.div`
 font-family: Arial;
 color: #ebebeb;
 font-size: 16px;
 font-weight: 600;
 margin-top: 10px;
`;
export const CEORole = styled.div`
 color: #5e6b7e;
 font-size: 12px;
 font-family: Inter;
`;
