import '../styles/App.css';
import Nav from './Nav';
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';
function App() {
  const [products,setProducts] = useState([])
  return (
    <div className="App">
      <RouteSwitch products={products} setProducts={setProducts}>
        <Nav></Nav>
      </RouteSwitch>
    </div>
  );
}

export default App;
