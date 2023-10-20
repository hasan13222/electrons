import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const {user} = useContext(AuthContext)
    const {id} = useParams();
    
    const notify = () => toast("Product Added to Cart Successfully");

    const handleAddToCart = () => {
        const productToBeAdded = {
            userId: user.uid,
            product_name: product.product_name,
            product_image: product.product_image
        }
        fetch('http://localhost:5000/addToCart', {
            method: 'POST',
            headers: { 'content-type': 'application/json', },
            body: JSON.stringify(productToBeAdded)
        })
        .then(response => response.json())
        .then(() => {
            notify();
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => {
            console.log(err.message);
        })
    }, [])
  return (
    <>
        <div className="full_container productDetails_full">
            <div className="fix_container productDetails">
                <img src={product?.product_image} alt="product thumb" />
                <div className="specs">
                    <h2>Specifications</h2>
                    <ul>
                        <li>Name: {product?.product_name}</li>
                        <li>Brand: {product?.brand_name}</li>
                        <li>Type: {product?.product_type}</li>
                        <li>Price: {product?.product_price}</li>
                        <li>Rating: {product?.rating}</li>
                    </ul>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{product?.description}</p>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default ProductDetails