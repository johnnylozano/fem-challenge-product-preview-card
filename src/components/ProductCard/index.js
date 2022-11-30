import styled from 'styled-components';
import { ShoppingIcon } from '../ShoppingIcon';
import { Button } from '../Button';

const CardContainer = styled.article`
   display: grid;
   background-color: var(--clr-neutral-100);
   border-radius: 0.5rem;
   overflow: hidden;
   max-width: 600px;

   @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
   }
`;

const ProductContent = styled.div`
   padding: 1.5rem;
   display: grid;
   gap: 1rem;

   @media (min-width: 600px) {
      padding: 2rem;
   }
`;

const ProductCategory = styled.p`
   font-size: 0.8125rem;
   text-transform: uppercase;
   letter-spacing: 5px;
`;

const ProductTitle = styled.h1`
   font-style: 2rem;
   font-family: var(--ff-accent);
   color: var(--clr-neutral-900);
   line-height: 1;
`;

const FlexGroup = styled.div`
   display: flex;
   gap: 1rem;
   flex-wrap: wrap;
   align-items: center;
`;

const SalePrice = styled.p`
   font-size: 2rem;
   font-family: var(--ff-accent);
   color: var(--clr-primary-400);
`;

const VisuallyHidden = styled.span`
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

export const ProductCard = ({
   imgLg,
   imgSm,
   productCategory,
   productTitle,
   description,
   salePrice,
   originalPrice,
}) => {
   return (
      <CardContainer>
         <picture className="product__img">
            <source srcSet={imgLg} media="(min-width: 600px)" />
            <img
               src={imgSm}
               alt="Gabrielle Essence perfume bottle laying on a table"
            />
         </picture>

         <ProductContent>
            <ProductCategory>{productCategory}</ProductCategory>

            <ProductTitle>{productTitle}</ProductTitle>

            <p>{description}</p>

            <FlexGroup>
               <SalePrice>
                  <VisuallyHidden>On sale for:</VisuallyHidden>
                  {salePrice}
               </SalePrice>
               <p className="product__whole-price">
                  <VisuallyHidden>Original price:</VisuallyHidden>
                  <s>{originalPrice}</s>
               </p>
            </FlexGroup>

            <Button>
               <ShoppingIcon />
            </Button>
         </ProductContent>
      </CardContainer>
   );
};
