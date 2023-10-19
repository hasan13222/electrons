import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import app from '../../firebase/firebase.config'
// import { useContext, useState } from "react";
// import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { AuthCtx } from "../../contexts/AuthCtx";

const Login = () => {
//   const [loginError, setLoginError] = useState("");
//   const [googleLoginError, setGoogleLoginError] = useState("");
//   const notify = () => toast("You Logged In Successfully");  
//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();
//   const {setLoading} = useContext(AuthCtx)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.user_email.value;
//     const password = e.target.user_password.value;
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         setLoginError('');
//         notify();
//         setLoading(false);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         setLoginError(errorMessage);
//       });
//   };

//   const handleGoogleSignin = () => {
//     signInWithPopup(auth, provider)
//     .then(() => {
//       setGoogleLoginError('');
//         notify();
//     }).catch((error) => {
//       const errorMessage = error.message;
//       setGoogleLoginError(errorMessage);
//     });
//   }

  return (
    <>
      <div className="full_container login_full">
        <div className="fix_container login">
          <h2>User Login</h2>
          <form >
            <input type="text" name="user_email" placeholder="Email" />
            <input
              type="password"
              name="user_password"
              placeholder="PassWord"
            />
            <p className="warning">{}</p>
            <input type="submit" value="Login" />
          </form>
          <p>
            Didn&apos;t Signed Up? Go to{" "}
            <Link style={{ textDecoration: "underline", fontSize: '20px', color: '#1b71ac', fontWeight: 'bold' }} to={"/signup"}>
              SignUp
            </Link>
          </p>
          <button className="google_signin">
            <FcGoogle />
            Continue With Google
          </button>
          <p className="warning">{}</p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Login;
