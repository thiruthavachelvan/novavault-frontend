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
                    <span style={{ fontSize: "30px" }}>
                        🚀
                    </span>

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

                <p
                    style={{
                        color: "#ffffff",
                        textAlign: "center",
                        marginTop: "5px",
                        textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                        fontWeight: "500"
                    }}
                >
                    Secure Password Recovery Platform
                </p>
            </div>

            <div className="glass-card">

                <h2
                    style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        textAlign: "center",
                        marginBottom: "10px",
                        textShadow: "0 3px 15px rgba(0,0,0,0.4)"
                    }}
                >
                    Forgot Password
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#ffffff",
                        marginBottom: "20px",
                        textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                        fontWeight: "500"
                    }}
                >
                    Enter your email to receive reset link
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#ffffff",
                                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "10px",
                                padding: "12px",
                                fontSize: "16px"
                            }}
                        />

                    </div>

                    <button className="btn glass-btn w-100">
                        Send Reset Link
                    </button>

                </form>

                {message && (
                    <p className="text-center mt-3">
                        {message}
                    </p>
                )}

                <p className="text-center mt-3" style={{ color: "white" }}>
                    Don't have an account? <Link to="/register" style={{ color: "#ffffff", fontWeight: "bold" }}>Register here</Link>
                </p>

            </div>

        </div>
    );
}

export default ForgotPassword;
