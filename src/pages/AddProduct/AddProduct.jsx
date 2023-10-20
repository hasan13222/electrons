import { ToastContainer, toast } from 'react-toastify';
import './AddProduct.css'

const AddProduct = () => {

  const notify = () => toast("Product Added Successfully");  
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const brand_name = form.brand_name.value;
    const product_type = form.product_type.value;
    const product_price = form.product_price.value;
    const rating = form.rating.value;
    const product_image = form.product_image.value;
    const description = form.description.value;

    const newProduct = {
      product_name,
      brand_name,
      product_type,
      product_price,
      rating,
      product_image,
      description
    }

    fetch('https://electrons-server-acd4l58lx-jamil-hasans-projects.vercel.app/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(() => {
      notify();

    })
    .catch(err => {
      console.log(err.message);
    })
  }
  return (
    <>
      <div className="full_container addProduct_full">
        <div className="fix_container addProduct">
          <h2>Add New Product</h2>
          <form onSubmit={handleAddProduct}>
            <div className="input_item">
              <label htmlFor="product_name">Product Name</label>
              <input placeholder="Product Name" type="text" name="product_name" />
            </div>
            <div className="input_item">
              <label htmlFor="brand_name">Brand Name</label>
              <input placeholder="Brand Name" type="text" name="brand_name" />
            </div>
            <div className="input_item">
              <label htmlFor="product_type">Product Type</label>
              <input placeholder="Product Type" type="text" name="product_type" />
            </div>
            <div className="input_item">
              <label htmlFor="product_price">Product Price</label>
              <input placeholder="Product Price" type="text" name="product_price" />
            </div>
            <div className="input_item">
              <label htmlFor="rating">Rating</label>
              <input placeholder="Rating" type="text" name="rating" />
            </div>
            <div className="input_item">
              <label htmlFor="product_image">Product Image Url</label>
              <input placeholder="Product Image Url" type="text" name="product_image" />
            </div>
            <div className="input_item description">
              <label htmlFor="description">Short Description</label>
              <textarea name="description" placeholder="Short Description" cols="30" rows="7"></textarea>
            </div>
            <input type="submit" value="Add Product" />
          </form>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default AddProduct;
