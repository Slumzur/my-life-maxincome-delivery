import styled from 'styled-components';

export const Page = styled.div`
  & > div:last-child {
    margin-top: 0;
  }
`;

export const Main = styled.div`
  padding: 0 16px;
  
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  
  @media (min-width: 1440px) {
    padding: 0;
    margin: 0 auto;
    max-width: 1200px;
  }
`;

export const AdvantageLink = styled.a`
  display: block;
  margin: 80px 0 24px;
  text-decoration: none;
  
  & > div {
    color: #CC163F;
  }
  
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  
  @media (min-width: 1024px) {
    margin-top: 120px;
  }
`;

