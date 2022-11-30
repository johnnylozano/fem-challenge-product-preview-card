import './App.css';
import { ProductCard } from './components/ProductCard';
import { PerfumeData } from './components/ProductCard/ProductData';

function App() {
   return (
      <div className="App">
         <main>
            <ProductCard {...PerfumeData} />
         </main>
      </div>
   );
}

export default App;
