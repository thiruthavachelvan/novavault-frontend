import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                email,
                password,
            });

            setMessage(response.data.message);
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Error registering user";
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
                    Advanced Security & Account Privacy
                </p>
            </div>

            <div className="glass-card">
                <h2>Account Creation</h2>
                <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "0.95rem" }}>
                    Establish your digital identity to begin securing your assets.
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
                            placeholder="Primary Decryption Key"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn glass-btn w-100">Initialize Account</button>
                </form>

                {message && (
                    <p className="text-center mt-3" style={{ color: "#c5a059", fontSize: "0.9rem" }}>
                        {message}
                    </p>
                )}

                <div className="mt-5 pt-3" style={{ borderTop: "1px solid rgba(197, 160, 89, 0.1)", textAlign: "center" }}>
                    <p style={{ fontSize: "0.85rem" }}>
                        Already established? <Link to="/login">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
