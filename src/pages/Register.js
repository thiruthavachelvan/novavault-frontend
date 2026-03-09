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
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "25px",
                    color: "white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
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
                            textShadow: "0 3px 15px rgba(0,0,0,0.4)",
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
                        fontWeight: "500",
                    }}
                >
                    Create your account to get started
                </p>
            </div>

            <div className="glass-card">
                <h2
                    style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        textAlign: "center",
                        marginBottom: "10px",
                        textShadow: "0 3px 15px rgba(0,0,0,0.4)",
                    }}
                >
                    Register
                </h2>

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
                                fontSize: "16px",
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#ffffff",
                                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "10px",
                                padding: "12px",
                                fontSize: "16px",
                            }}
                        />
                    </div>

                    <button className="btn glass-btn w-100">Register</button>
                </form>

                {message && <p className="text-center mt-3" style={{ color: "white" }}>{message}</p>}

                <p className="text-center mt-3" style={{ color: "white" }}>
                    Already have an account? <Link to="/login" style={{ color: "#ffffff", fontWeight: "bold" }}>Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
