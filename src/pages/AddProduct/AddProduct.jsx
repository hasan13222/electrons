import './AddProduct.css'

const AddProduct = () => {
  return (
    <>
      <div className="full_container addProduct_full">
        <div className="fix_container addProduct">
          <h2>Add New Product</h2>
          <form>
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
    </>
  );
};

export default AddProduct;
