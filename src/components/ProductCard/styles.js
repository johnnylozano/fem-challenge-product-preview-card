import styled from 'styled-components';

export const CardContainer = styled.article`
   display: grid;
   background-color: var(--clr-neutral-100);
   border-radius: 0.5rem;
   overflow: hidden;
   max-width: 600px;

   @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
   }
`;

export const ProductContent = styled.div`
   padding: 1.5rem;
   display: grid;
   gap: 1rem;

   @media (min-width: 600px) {
      padding: 2rem;
   }
`;

export const ProductCategory = styled.p`
   font-size: 0.8125rem;
   text-transform: uppercase;
   letter-spacing: 5px;
`;

export const ProductTitle = styled.h1`
   font-style: 2rem;
   font-family: var(--ff-accent);
   color: var(--clr-neutral-900);
   line-height: 1;
`;

export const FlexGroup = styled.div`
   display: flex;
   gap: 1rem;
   flex-wrap: wrap;
   align-items: center;
`;

export const SalePrice = styled.p`
   font-size: 2rem;
   font-family: var(--ff-accent);
   color: var(--clr-primary-400);
`;

export const VisuallyHidden = styled.span`
   &:not(:focus)&:not(:active) {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
   }
`;
