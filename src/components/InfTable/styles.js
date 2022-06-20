import styled from 'styled-components';
import React from "react";

export const Wrapper = styled.div`
  display: ${(props) => props.active ? 'block' : 'none'};
`;

export const Item = styled.div`
  background: #FAF9F9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 24px;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    & > div:last-child {
      width: 540px;
    }
  }
`;

export const Header = styled.div`
  & > div {
    color: #595959;
  }
  
  @media (min-width: 1024px) {
    width: 540px;
    margin-right: 24px;
    flex-shrink: 0;
  }
`;

export const DashLine = styled.div`
  height: 1px;
  margin: 16px 0;
  background: repeating-linear-gradient(to left, #8C8C8C, #8C8C8C 1px, transparent 3px, transparent 7px);
  
  @media (min-width: 768px) {
    margin: 24px 0;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

