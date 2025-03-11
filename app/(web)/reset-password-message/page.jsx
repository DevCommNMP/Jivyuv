"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ResetPasswordMessage = () => {
    const searchParams = useSearchParams();
    const [email, setEmail] = useState('');

    useEffect(() => {
        const email = searchParams.get('email');
        setEmail(email);
    }, [searchParams]);
    console.log(email);
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        marginLeft: '350px',
        height: '100vh',
        width: '50%',
    };

    const imageStyle = {
        width: '500px',
    };

    const messageStyle = {
        fontSize: '18px',
        textAlign: 'center',
        marginTop: '20px',
        color: '#333',
    };

    const [timer, setTimer] = useState(120);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        let interval;
        if (isButtonDisabled) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(interval);
                        setIsButtonDisabled(false);
                        return 120;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isButtonDisabled]);

    const handleButtonClick = async () => {
        setIsButtonDisabled(true);
        try {
            const response = await fetch('http://localhost:5000/api/auth/resend-password-reset-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Email resent successfully!');
            } else {
                alert('Failed to resend email.');
            }
        } catch (error) {
            alert('An error occurred while resending the email.');
        }
    };

    return (
        <div className="reset-password-container" style={containerStyle}>
            <img
                src="/assets/images/message-logo/forgot-password.jpg"
                alt="Forgot password"
                style={imageStyle}
            />
            <div>
                <p style={messageStyle}>
                    An email has been sent to {email}. Please check your inbox and follow the instructions to change your password.
                </p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={handleButtonClick}
                    disabled={isButtonDisabled}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: isButtonDisabled ? '#6c757d' : '#007BFF',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                    }}
                >
                    {isButtonDisabled ? `Resend Email (${timer}s)` : 'Resend Email'}
                </button>
            </div>
        </div>
    );
};

export default ResetPasswordMessage;