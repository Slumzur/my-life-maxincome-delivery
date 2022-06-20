import styled from 'styled-components';
import appStoreIcon from "./images/app-store-icon.svg";
import {BodyS, H4} from "***";

export const Wrapper = styled.div`
  margin-top: 80px;
  
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  
  @media (min-width: 1024px) {
    margin-top: 120px;
  }
`;

export const ItemContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  
  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 48px;
  }
`;

export const Item = styled.div`
  position: relative;
  background-color: #FFF2F2;
  border-radius: 16px;
  margin-bottom: 8px;
  padding: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  cursor: ${(props) => props.canBeClicked ? 'pointer' : 'default'};

  @media (min-width: 768px) { 
    display: flex;
    box-sizing: border-box;
    height: ${(props) => props.tabletHeight};
  }
  
  @media (min-width: 1024px) {
    flex-direction: column;
    padding: 24px;
    margin: 0 24px 0 0;
    width: 33%;
    height: 374px;
  
    &:last-child {
      margin-right: 0;
    }
  }
  
  @media (min-width: 1440px) { 
    height: 234px;
  }
`;

export const Numeration = styled.div`
  background-color: #CC163F;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
  margin-bottom: 24px;
  
  & > div {
    color: #FFFFFF;
    font-size: 16px;
    line-height: 36px;
  }
  
  @media (min-width: 768px) { 
    margin: 0 24px 0 0;
  }
  
  @media (min-width: 1024px) { 
    margin: 0 0 16px 0;
  }
`;

export const ItemHeader = styled.div`
  margin-bottom: 8px;
  
  & img {
    position: relative;
    top: 4px;
    margin-left: 10px;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
  
  @media (min-width: 1440px) {
    width: 216px;
  }
`;

export const ItemText = styled.div`
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  
  @media (min-width: 1440px) {
    width: 200px;
  }
`;

export const ItemTextFlexible = styled(ItemText)`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export const CardImgBox = styled.div`
  @media (min-width: 768px) {
    position:absolute;
    bottom: 24px;
    right: 52px;
  }
  
  @media (min-width: 1024px) {
    left: 24px;
    right: unset;
  }
  
  @media (min-width: 1440px) {
    bottom: 33px;
    right: 0;
    left: unset;
  }
`;

export const QrCodeImgBox = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    position:absolute;
    bottom: 24px;
    right: 84px;
  }
  
  @media (min-width: 1024px) {
    bottom: 24px;
    right: unset;
    left: 24px;
  }
  
  @media (min-width: 1440px) {
    left: unset;
    bottom: 32px;
    right: 16px;
  }
`;

export const PhoneImgBox = styled.div`
  margin-bottom: -27px;
  
  @media (min-width: 768px) {
    position: absolute;
    margin: 0;
    bottom: 0;
    right: 62px;
  }
  
  @media (min-width: 1024px) {
    left: 24px;
    right: unset;
    bottom: -3px;
  }
  
  @media (min-width: 1440px) {
    right: 7px;
    left: unset;
  }
`;

export const ItemImage = styled.img`
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    width: 360px;
  }
  
  @media (min-width: 1024px) {
    width: unset;
  }
`;

export const StoresLinkBlock = styled.div`
  width: 185px;
  margin-top: 16px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.a`
  display: flex;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(99, 90, 82, 0.15);
  border-radius: 8px;
  padding: 6px 0 10px 24px;
  margin-bottom: 16px;
  cursor: pointer;
  text-decoration: none;
  
  & > img {
    width: 24px;
    margin-right: 16px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;


export const ButtonTextBlock = styled.div`
  & > div {
    color: #262626;
  }
`;