import { ShoppingIcon } from '../ShoppingIcon';
import { Button } from '../Button';
import {
   CardContainer,
   ProductContent,
   ProductCategory,
   ProductTitle,
   FlexGroup,
   SalePrice,
   VisuallyHidden,
} from './styles';

export const ProductCard = ({
   imgLg,
   imgSm,
   alt,
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
            <img src={imgSm} alt={alt} />
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
