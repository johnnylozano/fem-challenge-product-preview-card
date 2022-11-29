import './App.css';

function App() {
   return (
      <div className="App">
         <main>
            <article className="product__card">
               <picture className="product__img">
                  <source
                     srcSet={require('./assets/img/image-product-desktop.jpg')}
                     media="(min-width: 600px)"
                  />
                  <img
                     src={require('./assets/img/image-product-mobile.jpg')}
                     alt="Gabrielle Essence perfume bottle laying on a table"
                  />
               </picture>

               <div className="product__content">
                  <p className="product__category">Perfume</p>

                  <h1 className="product__title">
                     Gabrielle Essence Eau De Parfum
                  </h1>

                  <p>
                     A floral, solar and voluptuous interpretation composed by
                     Olivier Polge, Perfumer-Creator for the House of CHANEL.{' '}
                  </p>

                  <div className="flex-group">
                     <p className="product__sale-price">
                        <span className="visually-hidden">On sale for:</span>
                        $149.99
                     </p>
                     <p className="product__whole-price">
                        <span className="visually-hidden">Original price:</span>
                        <s>$169.99</s>
                     </p>
                  </div>

                  <button className="btn" dataIcon="shopping-cart">
                     Add to Cart
                  </button>
               </div>
            </article>
         </main>
      </div>
   );
}

export default App;
