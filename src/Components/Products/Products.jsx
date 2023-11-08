import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css';
import Order from '../Order/Order';

const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('fackData.json')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
      // The empty dependency array ensures this effect runs only once
    const [cart, setCart] = useState([]); // Initialize an empty cart

  const handleAddToCart = product => {
  // Update the cart state by adding the product
   const newCart =[...cart, product];
   setCart(newCart)


  };
  
  const handleRemoveCart = id =>{
   const remaining = cart.filter(prod => prod.id !== id);
   setCart(remaining);
  };
  
  
    return (
        <div className='products-containar'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                product.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
                }
            </div>
            <div className='order-summry'>
            {/* <h1 className='text-2xl font-semibold text-center'>Orders Summry</h1> */}
            <Order cart={cart}
            handleRemoveCart={handleRemoveCart}
           
            ></Order>
           </div>
        </div>
    );
};

export default Products;
