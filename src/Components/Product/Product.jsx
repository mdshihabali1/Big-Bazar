import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {title, img, model, price} = product;
    return (
        <div className='product-containar'>
            
           <div className='product'>
           <img className='' src={img} alt="" />
            <p className=''>{title}</p>
           <p>Model:{model}</p>
           <p>Price:{price}</p>
           <button onClick={() => handleAddToCart(product)} className='button'>Buy Now</button>
          
           </div>
           
        </div>
    );
};

export default Product;