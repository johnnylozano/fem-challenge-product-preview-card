import styled from 'styled-components';
import { ShoppingIcon } from '../ShoppingIcon';

const Btn = styled.button`
   cursor: pointer;
   text-decoration: none;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75em 1.5em;
   border: 0;
   border-radius: 0.5rem;
   background-color: var(--clr-primary-400);
   color: var(--clr-neutral-100);
   font-weight: var(--fw-bold);
   font-size: 0.925rem;

   &:is(:hover, :focus) {
      background-color: var(--clr-primary-500);
   }
`;

export const Button = () => {
   return (
      <Btn>
         <ShoppingIcon />
         Add to Cart
      </Btn>
   );
};
