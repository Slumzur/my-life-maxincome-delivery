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
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 48px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0 -16px;
  padding: 0 16px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (min-width: 768px) {
    margin: 0 -40px;
    padding: 0 40px;
  }
  
  @media (min-width: 1024px) {
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    overflow: unset;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  
  @media (min-width: 1024px) {
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
`;

export const Item = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 254px;
  margin-right: 16px;
  background: #FAF9F9;
  border-radius: 16px;
  padding: 16px;
  &:last-child {
    margin-right: 0;
  }
  
  @media (min-width: 768px) {
    width: 384px;
    padding: 24px;
    margin-right: 24px;
  }
  
  @media (min-width: 1024px) {
    width: calc((100% - 48px)/3);
    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
      margin-bottom: 40px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

export const Icon = styled.img`
  margin-bottom: 24px;
`;

export const Text = styled.div`
  & > div {
    color: #595959;
    
    // ToolTip
    & > div {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      bottom: -4px;
    }
  }
`;
