import './register.scss';
import { Link, useNavigate } from "react-router-dom";
import { request, setAuthToken } from '../../lib/apiRequest';
import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        const email = formData.get("email");

        
    
        try {
            request("POST", "/register", { 
                userName:userName,
                email: email,
                password:password
            })
                .then((response) => {
                    setAuthToken(response.data.token);
                    navigate('/')
                    console.log("succesfully user created")
               
                })
                .catch(() =>{
                    navigate("/login")
                    console.log('gg')

                });

        } catch (err) {
            setError(err.response?.data.message || "An unexpected error occurred. Please try again later.");
            alert("Success")
        } finally { 
            setIsLoading(false);
        }
    };

    return (
        <div className="registerPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button disabled={isLoading}>Register</button>
                    {error && <span className="error">{error}</span>}
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Register;
