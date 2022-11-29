import './App.css';

function App() {
   return (
      <div className="App">
         <main>
            <article className="product__card">
               <picture className="product__img">
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
                     <p className="product__sale-price">$149.99 </p>
                     <p className="product__whole-price">$169.99 </p>
                  </div>

                  <button className="btn">Add to Cart</button>
               </div>
            </article>
         </main>
      </div>
   );
}

export default App;
