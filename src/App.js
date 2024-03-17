import { useEffect, useState } from 'react';

import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import AvailableProducts from './components/Products/AvailableProducts';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState(null)
  const [category, setCategory] = useState('All')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json => {
        setAllProducts(json)
        setProducts(json)
      })
  }, [])

  useEffect(()=> {
    if (search == null || search == "")
      setProducts(allProducts)
    else
      setProducts(allProducts?.filter(product => product.title.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onSearch={setSearch} changeCategory={setCategory} />
      <main>
        <AvailableProducts products={products} category={category} />
      </main>
    </CartProvider>
  );
}

export default App;
