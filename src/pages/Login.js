import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <div className="logo-container">
                <div className="logo-glow">
                    <span style={{ fontSize: "32px", fontWeight: "800", color: "#050a14" }}>V</span>
                </div>
                <h1 className="premium-title">NovaVault</h1>
                <p style={{ marginTop: "10px", fontSize: "1.1rem" }}>
                    Secure Digital Asset Management
                </p>
            </div>

            <div className="glass-card">
                <h2>Authentication</h2>
                <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "0.95rem" }}>
                    Please enter your credentials to access your vault.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Decryption Key"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn glass-btn w-100">
                        Authenticate
                    </button>
                </form>

                {message && (
                    <div className="text-center mt-3" style={{ color: "#c5a059", fontSize: "0.9rem" }}>
                        <p>{message}</p>
                    </div>
                )}

                <div className="mt-5 pt-3" style={{ borderTop: "1px solid rgba(197, 160, 89, 0.1)", textAlign: "center" }}>
                    <p style={{ fontSize: "0.85rem", marginBottom: "10px" }}>
                        <Link to="/">Lost access? Recover account</Link>
                    </p>
                    <p style={{ fontSize: "0.85rem" }}>
                        Unauthorized? <Link to="/register">Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
