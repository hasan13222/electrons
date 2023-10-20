import { useContext } from "react"
import { images } from "../assets"
import {NavLink} from 'react-router-dom'
import { AuthContext } from "../contexts/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';


const Navbar = () => {
    const {user, handleSignOut} = useContext(AuthContext);
    const notify = () => toast("You Logged out successfully");

    console.log(user);

    const handleLogout = () => {
        handleSignOut()
          .then(() => {
            notify();
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <>
        <div className="full_container navbar_full">
            <div className="fix_container navbar">
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src={images.logo} alt="logo" />
                        <span>Electrons</span>
                    </NavLink>
                </div>
                <ul className="nav">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    {user &&  <li>
                         <NavLink to={'/add-product'}>Add Product</NavLink>
                    </li>
                    }
                    {user &&  <li>
                         <NavLink to={'/carts'}>My Cart</NavLink>
                    </li>
                    }
                    <li>
                        <NavLink to={'/cart'}>My Cart</NavLink>
                    </li>
                    <li>
                    {!user && <NavLink to={"/login"}>Login</NavLink>}
                    </li>
                    <li>
                    {user && <img src={user?.photoURL} alt="profile" />}
                    </li>
                    <li>
                    {user && <span>{user?.displayName}</span>}
                    </li>
                    <li>
                    {user && <button onClick={handleLogout}>Logout</button>}
                    </li>
                </ul>
            </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default Navbar