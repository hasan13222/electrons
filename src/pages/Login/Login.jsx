import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [googleLoginError, setGoogleLoginError] = useState("");
  const notify = () => toast("You Logged In Successfully");  
  const {handleSignIn, handleGoogleSignIn} = useContext(AuthContext)

    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.user_email.value;
    const password = e.target.user_password.value;
    handleSignIn(email, password)
      .then(() => {
        setLoginError('');
        notify();
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  const handleGoogleSubmit = () => {
    handleGoogleSignIn()
    .then(() => {
      setGoogleLoginError('');
        notify();
        navigate('/')
    }).catch((error) => {
      const errorMessage = error.message;
      setGoogleLoginError(errorMessage);
    });
  }

  return (
    <>
      <div className="full_container login_full">
        <div className="fix_container login">
          <h2>User Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="user_email" placeholder="Email" />
            <input
              type="password"
              name="user_password"
              placeholder="PassWord"
            />
            <p className="warning">{loginError}</p>
            <input type="submit" value="Login" />
          </form>
          <p>
            Didn&apos;t Signed Up? Go to{" "}
            <Link style={{ textDecoration: "underline", fontSize: '20px', color: '#1b71ac', fontWeight: 'bold' }} to={"/signup"}>
              SignUp
            </Link>
          </p>
          <button onClick={handleGoogleSubmit} className="google_signin">
            <FcGoogle />
            Continue With Google
          </button>
          <p className="warning">{googleLoginError}</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
