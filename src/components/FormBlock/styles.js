import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 80px;
  
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  
  @media (min-width: 1024px) {
    margin-top: 120px;
  }
`;

export const Header = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Banner = styled.div`
  display: flex;
  padding: 8px;
  background: #F5F4F4;
  border-radius: 8px;
  margin: 24px 0 32px;
  align-items: center;
  
  & > div {
    margin-left: 8px;
    color: #595959;
  }
  
  @media (min-width: 768px) {
    margin: 32px 0 40px;
  }
`;