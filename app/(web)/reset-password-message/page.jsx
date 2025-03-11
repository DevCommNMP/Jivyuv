const ResetPasswordMessage = () => {
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

    return (
        <div className="reset-password-container" style={containerStyle}>
            <img
                src="/assets/images/message-logo/forgot-password.jpg"
                alt="Forgot password"
                style={imageStyle}
            />
            <div>
                <p style={messageStyle}>
                    An email has been sent to your email address. Please check your inbox and follow the instructions to change your password.
                </p>
            </div>
            <div>
                <button>
                    Resend Email
                </button>
            </div>
        </div>
    );
};

export default ResetPasswordMessage;