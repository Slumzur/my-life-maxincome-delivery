import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 80px;
  
  & > div:last-child {
    border: 0;
  }
  // Accordion
  & > div {
    background-color: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(99, 90, 82, 0.15);
    border: 1px solid #EDECEC;
    padding: 24px 16px;
    // AccordionHeader, AccordionBody
    & > div {
      border-radius: 16px;
      padding: 0;
      align-items: baseline;
    }
    // AccordionBody
    & > div:first-child.active ~ .accordion-body {
      padding: 32px 4px 0 0;
      margin: -16px;
    }
  }
  
  @media (min-width: 768px) {
    // Accordion
    & > div {
      padding: 32px;
      
      // AccordionBody
      & > div:first-child.active ~ .accordion-body {
        margin: 0 -32px;
      }
    }
  }
  
  @media (min-width: 1024px) {
    // Accordion
    & > div {
      padding: 32px 40px;
      
        // AccordionBody
        & > div:first-child.active ~ .accordion-body {
          padding: 32px 8px 0 0;
          margin: 0;
        }
    }
  }
`;

export const HeaderContent = styled.div`
  width: 85%;
`;

export const SubHeader = styled.div`
  margin-top: 16px;
  
  & > div {
    display: inline-block;
    
    &:first-child {
      margin-right: 8px;
      color: #262626;
    }
    
    &:last-child {
      color: #595959;
    }
  }
`;

