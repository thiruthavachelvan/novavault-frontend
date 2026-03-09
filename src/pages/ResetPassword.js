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
            <div className="glass-card">
                <h3 className="text-center mb-4">Reset Password</h3>

                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Verifying token...</p>
                    </div>
                ) : isValid ? (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter new password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="btn glass-btn w-100">Reset Password</button>
                        </form>
                        {message && <p className="text-center mt-3">{message}</p>}
                    </>
                ) : (
                    <div className="text-center">
                        <p className="text-danger" style={{ fontWeight: "bold" }}>{message}</p>
                        <Link to="/" className="btn glass-btn mt-2">Go to Forgot Password</Link>
                    </div>
                )}
            </div>
        </div>
    );

}

export default ResetPassword;