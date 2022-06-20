import styled from 'styled-components';
import React from "react";

export const Wrapper = styled.div`
  margin-top: 80px;
  
  & > div:last-child {
    margin-top: 32px;
  }
  
  @media (min-width: 768px) {
    margin-top: 100px;    
    
    & > div:last-child {
      margin-top: 40px;
    }
  }
  
  @media (min-width: 1024px) {
    margin-top: 120px;  
    
    & > div:last-child {
      margin-top: 48px;
    }  
  }
`;

export const Header = styled.div`
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -16px 24px -16px;
  padding: 0 16px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (min-width: 768px) {
    margin: 0 -40px 32px -40px;
    padding: 0 40px;
  }
  
  @media (min-width: 1024px) {
    margin: 0 -40px 40px -40px;
  }
`;

export const CarouselItem = styled.div`
  padding: 12px 24px;
  margin: 8px 16px 8px 0;
  background: #FFFFFF;
  border-radius: 32px;
  flex-shrink: 0;
  box-shadow: ${(props) => props.active ? '0px 1px 8px rgba(99, 90, 82, 0.2)' : 'none'};
  border: ${(props) => props.active ? '1px solid transparent' : '1px solid #DADADA'};
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
  
  & > div {
    color: ${(props) => props.active ? '#CC163F' : '#595959'};
  }
`;

export const UlList = styled.ul`
  margin: 0;
  padding-left: 27px;
`;

export const UlListHeader = styled.div`
  margin-bottom: 8px;
`;

export const UlListItem = styled.li`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const BlockWithTooltip = styled.div`
  display: flex;
  align-items: center;
  
  & > div {
    // ToolTip
    & > div {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      bottom: -4px;
    }
  }
`;

export const TextWithToolTip = styled.div`
  margin-right: 12px;
`;

export const ValidityDate = styled.div`
  margin-right: 12px;
`;