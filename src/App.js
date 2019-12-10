import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//Context

import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={cart}>
          <Navigation cart={cart} />

          {/* Routes */}

          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
        </CartContext.Provider>
        <Route exact path="/" component={Products} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
//render={() => <Products products={products} addItem={addItem}/>}
//   {
//     title: item.title,
//     price: item.price
//     // image: item.img
//   }
