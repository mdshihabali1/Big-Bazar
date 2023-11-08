// import Product from '../Product/Product';
import './Order.css';

const Order = ({ cart, handleRemoveCart}) => {
  
 
 
  return (
    <div className='text-center order-container'>
      <h1 className='text-2xl font-semibold'>Order Summary: {cart.length}</h1>
      <div>
        {cart.map((product) => (
          <p className='mt-2' key={product.id}>
            {product.title}, price: {product.price}, <button onClick={() => handleRemoveCart(product.id)} className='bg-red-700 px-2'>X</button>
          </p>
        ))}
      </div>
      <p className='text-left'>Total:</p>
    </div>
  );
};

export default Order;
