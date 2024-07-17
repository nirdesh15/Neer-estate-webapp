import './login.scss';
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request ,setAuthToken} from '../../lib/apiRequest';



function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(event.target);

    const userName = formData.get("username");
    const password = formData.get("password");
   
    

    try {
        request("POST", "/login", { 
            userName:userName,
            
            password:password
        })
            .then((response) => {
                setAuthToken(response.data.token);
                navigate('/')
                console.log("Succesfully Login" )
                alert("You are loggedin")
                
           
            })
            .catch(() =>{
              setError("Invalid username or password");
                
               
                

            });

    } catch (err) {
        setError(err.response?.data.message || "An unexpected error occurred. Please try again later.");
    } finally { 
        setIsLoading(false);
    }
};

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading} >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <Link to="/register">Don't have an account? Register here.</Link>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
