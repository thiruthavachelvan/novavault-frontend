import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ResetPassword() {

    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify-token/${token}`);
                setIsValid(true);
            } catch (error) {
                setMessage(error.response?.data?.message || "Invalid or expired token");
                setIsValid(false);
            } finally {
                setLoading(false);
            }
        };
        verifyToken();
    }, [token]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/reset-password/${token}`, { password });

            setMessage(response.data.message);

        } catch (error) {
            const errorMsg = error.response?.data?.message || "Error resetting password";
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
                    Account Security Enhancement
                </p>
            </div>

            <div className="glass-card">
                <h3>Credential Update</h3>
                <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "0.9rem", opacity: 0.8 }}>
                    Please establish a new decryption key for your vault.
                </p>

                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3" style={{ fontSize: "0.9rem", color: "#c5a059" }}>Verifying security token...</p>
                    </div>
                ) : isValid ? (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New Decryption Key"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="btn glass-btn w-100">Rotate Credentials</button>
                        </form>
                        {message && <p className="text-center mt-4" style={{ fontSize: "0.9rem", color: "#c5a059" }}>{message}</p>}
                    </>
                ) : (
                    <div className="text-center">
                        <p style={{ fontWeight: "600", color: "#ff4d4d", marginBottom: "20px" }}>{message}</p>
                        <Link to="/" className="btn glass-btn w-100">Return to Recovery</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResetPassword;