import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, { email });


            setMessage(response.data.message);

        } catch (error) {
            const errorMsg = error.response?.data?.message || "Error sending email";
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
                    Advanced Security & Account Recovery
                </p>
            </div>

            <div className="glass-card">
                <h2>Account Recovery</h2>
                <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "0.95rem" }}>
                    Enter your registered email below to receive a secure recovery link.
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

                    <button className="btn glass-btn w-100">
                        Issue Recovery Link
                    </button>
                </form>

                {message && (
                    <div className="text-center mt-4">
                        <p style={{ fontSize: "0.9rem", color: "#c5a059" }}>{message}</p>
                        {message.toLowerCase().includes("sent") && (
                            <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                                Verification may take a few minutes. Check your junk folder if not received.
                            </p>
                        )}
                    </div>
                )}

                <div className="mt-5 pt-3" style={{ borderTop: "1px solid rgba(197, 160, 89, 0.1)", textAlign: "center" }}>
                    <p style={{ fontSize: "0.85rem", marginBottom: "10px" }}>
                        Remembered your credentials? <Link to="/login">Sign In</Link>
                    </p>
                    <p style={{ fontSize: "0.85rem" }}>
                        New to NovaVault? <Link to="/register">Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
