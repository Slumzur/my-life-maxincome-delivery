import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(164.35deg, rgba(237, 237, 237, 0.53) 4.87%, rgba(255, 255, 255, 0.73) 121.39%);
  box-shadow: 0 2px 10px 0 rgb(99 90 81 / 15%);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 24px 16px;
  margin-top: -24px;
  
  @media (min-width: 768px) {
    padding: 24px;
    flex-flow: row wrap;
    margin-top: -28px;
  }
  
  @media (min-width: 1024px) {
    flex-flow: row;
    margin-top: -88px;
  }
`;

export const Item = styled.div`
  position: relative;
  
  &:not(:first-child):before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
    background: -webkit-repeating-linear-gradient(right,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
    background: repeating-linear-gradient(270deg,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
  }
  
  &:nth-child(1) { padding-bottom: 16px; }
  &:nth-child(2), &:nth-child(3) { padding: 16px 0; }
  &:nth-child(4) { padding-top: 16px; }
  
  @media (min-width: 768px) {
    width: 50%;
    box-sizing: border-box;
    
    &:not(:first-child):before { display: none; }

    &:nth-child(1) { padding: 0 24px 24px 0; }
    &:nth-child(2) { padding: 0 0 24px 24px; }
    &:nth-child(3) { padding: 24px 24px 0 0; }
    &:nth-child(4) { padding: 24px 0 0 24px; }
    
    &:first-child:before, &:nth-child(2):before, &:nth-child(3):after, &:nth-child(4):after {
      content: "";
      display: block;
      position: absolute;
    }
    &:first-child:before {
        width: 95%;
        height: 1px;
        bottom: 0;
        left: 0;
        background: -webkit-repeating-linear-gradient(right,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
        background: repeating-linear-gradient(270deg,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
    }
    &:nth-child(2):before {
        width: 1px;
        height: 85%;
        top: 0;
        left: 0;
        background: -webkit-repeating-linear-gradient(top,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
        background: repeating-linear-gradient(180deg,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
    }
    &:nth-child(3):after {
        width: 1px;
        height: 85%;
        bottom: 0;
        right: 0;
        background: -webkit-repeating-linear-gradient(top,#8c8c8c,#8c8c8c 1px,transparent 2px,transparent 7px);
        background: repeating-linear-gradient(180deg,#8c8c8c,#8c8c8c 1px,transparent 2px,transparent 7px);
    }
    &:nth-child(4):after {
        width: 95%;
        height: 1px;
        top: 0;
        right: 0;
        background: -webkit-repeating-linear-gradient(left,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
        background: repeating-linear-gradient(90deg,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
    }
  }
  
  @media (min-width: 1024px) {
    width: 25%;
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
      padding: 0;
    }
    &:not(:first-child) {
      padding-left: 24px;
    }
    &:first-child:before, &:nth-child(3):after, &:nth-child(4):after { display: none; }
    &:nth-child(2):before, &:nth-child(3):before, &:nth-child(4):before {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 96%;
      top: 0;
      left: 0;
      background: -webkit-repeating-linear-gradient(top,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
      background: repeating-linear-gradient(180deg,#8c8c8c,#8c8c8c 1px,transparent 3px,transparent 7px);
    }
  }
`;

export const Icon = styled.img`
  margin-bottom: 16px;
`;

export const ItemHeader = styled.div`
  margin-bottom: 8px;
  width: 140px;
  
  @media (min-width: 768px) {
    width: 160px;
  } 
  
  @media (min-width: 1024px) {
    
  }
`;

export const ItemText = styled.div`
  & > div {
    color: #595959;
  }
`;
