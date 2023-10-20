import { useContext, useEffect, useState } from "react";
import './MyCart.css'
import { AuthContext } from "../../contexts/AuthProvider";

const MyCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const {user} = useContext(AuthContext)


  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        const updatedProduct = cartProducts.filter(item => item._id !== id);
        setCartProducts(updatedProduct);
    })
  }
  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => {
        const products = data.filter(item => item.userId === user.uid);
        setCartProducts(products);
      });
  });
  return (
    <>
      <div className="full_container cart_full">
        <div className="fix_container cart">
          <h2>You have {cartProducts?.length} products in your cart</h2>
          <div className="cart__items">
            {cartProducts?.map((product, index) => (
              <>
                <div className="cart__item">
                  <span>{index+1}.</span>
                  <img src={product.product_image} alt="prodcut image" />
                  <span>{product.product_name}</span>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
