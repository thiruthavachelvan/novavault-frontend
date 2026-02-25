import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResetPassword() {

    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(`https://novavault-backend.onrender.com/api/auth/reset-password/${token}`, { password });

            setMessage(response.data.message);

        } catch (error) {

            setMessage("Error resetting password");

        }

    };

    return (
        <div className="center-wrapper">

            <div className="glass-card">

                <h3 className="text-center mb-4">
                    Reset Password
                </h3>

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

                    <button className="btn glass-btn w-100">
                        Reset Password
                    </button>

                </form>

                {message && (
                    <p className="text-center mt-3">
                        {message}
                    </p>
                )}

            </div>

        </div>
    );

}

export default ResetPassword;