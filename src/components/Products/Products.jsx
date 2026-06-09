import "./Products.css";
import { useContext } from "react";
import { apiContext } from "../../context/ApiContext";
import { cartContext } from "../../context/CartContext";


function Products() {
  const {products} = useContext(apiContext)
  const {addToCart} = useContext(cartContext)
  
  return (
    <div className="Products py">
      <div className="container">
        <div className="h1">All Products</div>
        <div className="row">
          {products.map(product=>{
            return (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="card-body">
                <b className="title">{product.title}</b>
                <p className="price">${product.price}</p>
                <button className="btn-primary" onClick={()=>addToCart(product)}>Add To Cart</button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
