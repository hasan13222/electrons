import { images } from "../assets"
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <div className="full_container navbar_full">
            <div className="fix_container navbar">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={images.logo} alt="logo" />
                        <span>Electrons</span>
                    </Link>
                </div>
                <ul className="nav">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/add-product'}>Add Product</Link>
                    </li>
                    <li>
                        <Link>My Cart</Link>
                    </li>
                    <li>
                        <Link>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar