import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Root from "../pages/Root/Root";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            } />
            <Route path="/product/:id" element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            } />
            <Route path="/product/update/:id" element={
              <PrivateRoute>
                <UpdateProduct />
              </PrivateRoute>
            } />
            <Route path="/carts" element={<PrivateRoute>
              <MyCart/>
            </PrivateRoute>} />
            <Route path="/products/:brand" element={<Products />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
