"use client";
import { useEffect, useState } from "react";

const SetNewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mounted, setMounted] = useState(false); // To ensure the client-side mount
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

    // Use effect to ensure that this runs only after the component is mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything until the component is mounted
    if (!mounted) {
        return <div style={{ textAlign: "center", marginTop: "50px", height: "100vh", width: "100vw", padding: "100px" }}>Loading...</div>; // or return a loading spinner
    }
    async function verifyResetToken(){
        try{
            let response=await  axios.post(`${SERVER_URL}/api/`,{
                headers:{
                    Authorization:`Bearer ${id}`

                }

             })
            }catch(error){

            }

    

    }

    const handleSetNewPassword = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch(`${SERVER_URL}/api/auth/update-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Password reset successfully!");
                // Redirect or perform any necessary action
            } else {
                alert(data.message || "Failed to reset password");
            }
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Something went wrong. Please try again.");
        }
    };


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                marginTop: "100px",
                background: "linear-gradient(grey)",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    textAlign: "center",
                    width: "500px",
                    border: "3px solid #ff7c5b",
                }}
            >
                <h1 style={{ color: "#333", fontSize: "30px", marginBottom: "10px" }}>
                    Set Your New Password
                </h1>
                <p
                    style={{
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "20px",
                    }}
                >
                    Please enter your new password below.
                </p>

                <label
                    htmlFor="password"
                    style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "block",
                        marginBottom: "5px",
                    }}
                >
                    New Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px",
                        border: "2px solid #ff7c5b",
                        borderRadius: "5px",
                        outline: "none",
                        fontSize: "14px",
                    }}
                />

                <label
                    htmlFor="confirmPassword"
                    style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "block",
                        marginBottom: "5px",
                    }}
                >
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px",
                        border: "2px solid #ff7c5b ",
                        borderRadius: "5px",
                        outline: "none",
                        fontSize: "14px",
                    }}
                />

                <button
                    onClick={handleSetNewPassword}
                    style={{
                        backgroundColor: "#ff7c5b",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        transition: "0.3s",
                        width: "100%",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#b30000")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#ff7c5b !important")}
                >
                    Set New Password
                </button>
            </div>
        </div>
    );
};

export default SetNewPassword;
