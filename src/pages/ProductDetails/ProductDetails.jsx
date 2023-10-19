import { images } from '../../assets'
import './ProductDetails.css'


const ProductDetails = () => {
  return (
    <>
        <div className="full_container productDetails_full">
            <div className="fix_container productDetails">
                <img src={images.fast} alt="product thumb" />
                <div className="specs">
                    <h2>Specifications</h2>
                    <ul>
                        <li>Name: </li>
                        <li>Brand: </li>
                        <li>Type: </li>
                        <li>Price: </li>
                        <li>Rating: </li>
                    </ul>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam eius quas dolore repudiandae, perspiciatis animi voluptates aliquam laudantium enim corrupti consequatur fuga labore nulla impedit ex, tempora officia? Accusantium eius, debitis inventore velit nemo fugit excepturi animi nihil. Quidem, unde laboriosam. Voluptates nihil ducimus laboriosam hic aliquid, dolore id ipsum totam praesentium a labore dolor delectus, blanditiis asperiores iure, ea beatae eveniet maxime dicta inventore. Soluta ipsam necessitatibus asperiores fugit rerum sed, dolorum illo? Repudiandae mollitia beatae expedita quia iure dolor a voluptas qui, ipsam aliquid. Necessitatibus recusandae ratione dolorem tenetur sequi sed iure! Adipisci ipsum tempore autem. Quis!</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetails