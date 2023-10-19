import { Link } from "react-router-dom";
import {getAuth, updateProfile} from 'firebase/auth'
import "./SignUp.css";
import { useContext, useState } from "react"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../contexts/AuthProvider";
import app from "../../firebase/firebase.config";

const SignUp = () => {
  const [signupError, setSignupError] = useState('');
  const auth = getAuth(app);
  
  const {handleSignUp} = useContext(AuthContext)
  
  const notify = () => toast("You Signed Up Successfully");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;
    const password = e.target.user_password.value;
    const userName = e.target.user_name.value;
    
    handleSignUp(email, password)
      .then(() => {
        setSignupError('')
        notify();

        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: "https://i.ibb.co/hsWDV8M/R.png"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            console.log(error);
          });
          
      })
      .catch((error) => {
        const errorMessage = error.message;
        setSignupError(errorMessage)
      });
  };
  return (
    <>
      <div className="full_container signup_full">
        <div className="fix_container signup">
          <h2>User Registration</h2>
          <form onSubmit={handleSubmit}>
            <input required type="text" name="user_name" placeholder="Full Name" />
            <input type="email" name="user_email" placeholder="Email" />
            <input
              pattern="^(?=.*[A-Z])(?=.*[\W_]).{7,}$"
              type="password"
              name="user_password"
              placeholder="PassWord"
            />
            <small>
              Note: Your Password have to be more than 6 characters with a
              capital letter and a special character
            </small>
            <p className="warning">{signupError}</p>
            <input type="submit" value="Register" />
          </form>
          <p>
            Already Signed Up? Go to
            <Link style={{ textDecoration: "underline", fontSize: '20px', fontWeight: 'bold', color: '#1b71ac' }} to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
