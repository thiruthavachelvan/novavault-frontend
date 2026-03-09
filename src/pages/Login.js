import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
            setMessage(response.data.message);
            // In a real app we would store the token, but for this task we just verify login works
            setTimeout(() => {
                // Could navigate to a dashboard here
            }, 2000);
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Login failed";
            setMessage(errorMsg);
        }
    };

    return (
        <div className="center-wrapper">
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "25px",
                    color: "white"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span style={{ fontSize: "30px" }}>🚀</span>
                    <h1
                        style={{
                            fontWeight: "700",
                            letterSpacing: "1px",
                            margin: 0,
                            color: "#ffffff",
                            textAlign: "center",
                            textShadow: "0 3px 15px rgba(0,0,0,0.4)"
                        }}
                    >
                        NovaVault
                    </h1>
                </div>
            </div>

            <div className="glass-card">
                <h2
                    style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        textAlign: "center",
                        marginBottom: "20px",
                        textShadow: "0 3px 15px rgba(0,0,0,0.4)"
                    }}
                >
                    Login
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#ffffff",
                                borderRadius: "10px",
                                padding: "12px"
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#ffffff",
                                borderRadius: "10px",
                                padding: "12px"
                            }}
                        />
                    </div>

                    <button className="btn glass-btn w-100">
                        Login
                    </button>
                </form>

                {message && (
                    <div className="text-center mt-3" style={{ color: "white" }}>
                        <p>{message}</p>
                    </div>
                )}

                <div className="text-center mt-3" style={{ color: "white" }}>
                    <p>
                        <Link to="/" style={{ color: "#ffffff", fontWeight: "bold" }}>Forgot Password?</Link>
                    </p>
                    <p>
                        Don't have an account? <Link to="/register" style={{ color: "#ffffff", fontWeight: "bold" }}>Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
