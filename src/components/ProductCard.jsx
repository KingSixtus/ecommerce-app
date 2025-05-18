import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
      </Link>
      <div className="product-info">
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;