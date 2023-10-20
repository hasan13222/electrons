import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useEffect, useState } from 'react';


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
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
                <button>Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetails