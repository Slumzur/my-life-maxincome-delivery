import styled from 'styled-components';
import logo from "./images/logo.svg";
import rate21M from "./images/21mobile.png";
import rate21T from "./images/21tablet.png";
import backgroundM from "./images/backgroundHeaderM.png";
import backgroundT from "./images/backgroundHeaderT.png";
import background1024 from "./images/backgroundHeader1024.png";
import background1440 from "./images/backgroundHeader1440.png";
import {ButtonL} from "***";
import {DeterminationOfCity} from "./DeterminationOfCity"

export const Wrapper = styled.div`
  background-color: #F5F4F4;
  font-family: 'Roboto',sans-serif;
`;
export const Content = styled.div`
  background-image: url(${backgroundM});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px 16px 48px;
  background-color: #F5F4F4;
  position: relative;
  
  @media (min-width: 768px) {
    background-image: url(${backgroundT});
    padding: 48px 40px 68px;
  }
  
  @media (min-width: 1024px) {
    background-image: none;
    padding: 64px 40px 132px;
  }
  
  @media (min-width: 1440px) {
    padding: 64px 0 163px;
    max-width: 1200px;
    margin: auto;
  }
`;

export const LogoCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin: 0 0 32px;
  } 

  @media (min-width: 1024px) {
    justify-content: flex-start;
    margin: 0 0 40px;
  }
`;

export const StyledDeterminationOfCity = styled(DeterminationOfCity)`
  @media (min-width: 1024px) {
    margin-left: 45px;
  }
`

export const Logo = styled.a`
  display: inline-block;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 95px;
  height: 20px;
  
  @media (min-width: 768px) {
    width: 150px;
    height: 32px;
  }
`;

export const TextSection = styled.div`
  & > div:first-child {
    width: 240px;
  }
  
  & > div:last-child {
    margin-top: 16px;
  }
  
  @media (min-width: 768px) {
    width: 388px;
    & > div:first-child {
      width: 340px;
    }
    & > div:last-child {
      margin-bottom: 95px;
    }
  }
  
  @media (min-width: 1024px) {
    width: 460px;
    & > div:last-child {
      margin-bottom: 32px;
    }
  }
  
  @media (min-width: 1440px) {
    width: 508px;
  }
`;

export const InterestRate = styled.div`
  background-image: url(${rate21M});
  background-repeat: no-repeat;
  background-size: contain;
  width: 321px;
  height: 226px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -160px;
  
  @media (min-width: 768px) {
    right: 134px;
    background-image: url(${rate21T});
    margin: 0;
    left: unset;
    width: 350px;
    height: 247px;
  }
  
  @media (min-width: 1024px) {
    background-image: url(${background1024});
    width: 460px;
    height: 535px;
    right: 40px;
  }
  
  @media (min-width: 1440px) {
    background-image: url(${background1440});
    width: 690px;
    height: 535px;
    right: 0px;
  }
`;

export const Button1 = styled.button`
  ${ButtonL};
  width: 100%;
  padding: 16px;
  color: #FFFFFF;
  background-color: #CC163F;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  position: relative;
  margin-top: 130px;
    
  &:hover {
      background: #A81235;
  }
  
  @media (min-width: 768px) {
    width: 190px;
    margin-top: 0;
  }
`;

