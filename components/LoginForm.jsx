"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Use next/navigation for app directory
import Preloader from "./Preloader";

export default function LoginForm() {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam === "email_exists") {
      setError("Email already exists. Please use a different email.");
    } else if (errorParam === "auth_failed") {
      setError("Authentication failed. Please try again.");
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    window.location.href = `${SERVER_URL}/api/auth/google`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
     
      const res = await axios.post(`${SERVER_URL}/api/auth/login`, formData);
      const { token } = res.data;

      // Get current time and set expiration time (1 hour from now)
      const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hour in milliseconds

      // Store token and expiration timestamp in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", expirationTime.toString());

      // Redirect to dashboard
      window.location.href = "/";
    } catch (error) {
       
      setError("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
  
    {loading===true?<Preloader/>:
      <section className="register-section sec-pad">
        <div className="anim-icon">
          <div
            className="icon anim-icon-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
          ></div>
          <div
            className="icon anim-icon-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="inner-box">
            <div className="sec-title centred">
              <p>Sign in</p>
              <h2>Connect with us for Better Tour</h2>
            </div>
            <div className="form-inner">
              <h3>Sign In with</h3>
              <ul className="social-links clearfix">
                <li onClick={handleGoogleLogin}>
                  <Link href="#">
                    <span>
                      {googleLoading ? "Redirecting..." : "Sign In with Google"}
                    </span>
                    <i>
                      <svg
                        version="1.1"
                        id="fi_300221"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                      >
                        <path
                          style={{ fill: "#167EE6" }}
                          d="M492.668,211.489l-208.84-0.01c-9.222,0-16.697,7.474-16.697,16.696v66.715
	c0,9.22,7.475,16.696,16.696,16.696h117.606c-12.878,33.421-36.914,61.41-67.58,79.194L384,477.589
	c80.442-46.523,128-128.152,128-219.53c0-13.011-0.959-22.312-2.877-32.785C507.665,217.317,500.757,211.489,492.668,211.489z"
                        ></path>
                        <path
                          style={{ fill: "#12B347" }}
                          d="M256,411.826c-57.554,0-107.798-31.446-134.783-77.979l-86.806,50.034
	C78.586,460.443,161.34,512,256,512c46.437,0,90.254-12.503,128-34.292v-0.119l-50.147-86.81
	C310.915,404.083,284.371,411.826,256,411.826z"
                        ></path>
                        <path
                          style={{ fill: "#0F993E" }}
                          d="M384,477.708v-0.119l-50.147-86.81c-22.938,13.303-49.48,21.047-77.853,21.047V512
	C302.437,512,346.256,499.497,384,477.708z"
                        ></path>
                        <path
                          style={{ fill: "#FFD500" }}
                          d="M100.174,256c0-28.369,7.742-54.91,21.043-77.847l-86.806-50.034C12.502,165.746,0,209.444,0,256
	s12.502,90.254,34.411,127.881l86.806-50.034C107.916,310.91,100.174,284.369,100.174,256z"
                        ></path>
                        <path
                          style={{ fill: "#FF4B26" }}
                          d="M256,100.174c37.531,0,72.005,13.336,98.932,35.519c6.643,5.472,16.298,5.077,22.383-1.008
	l47.27-47.27c6.904-6.904,6.412-18.205-0.963-24.603C378.507,23.673,319.807,0,256,0C161.34,0,78.586,51.557,34.411,128.119
	l86.806,50.034C148.202,131.62,198.446,100.174,256,100.174z"
                        ></path>
                        <path
                          style={{ fill: "#D93F21" }}
                          d="M354.932,135.693c6.643,5.472,16.299,5.077,22.383-1.008l47.27-47.27
	c6.903-6.904,6.411-18.205-0.963-24.603C378.507,23.672,319.807,0,256,0v100.174C293.53,100.174,328.005,113.51,354.932,135.693z"
                        ></path>
                      </svg>
                    </i>
                  </Link>
                </li>
              </ul>
              <div className="text">
                <span>or</span>
              </div>
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading || googleLoading}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={loading || googleLoading}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <div className="forgot-password text-right">
                        <a href="/forgot-password">Forget Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div
                      className="form-group message-btn"
                      style={{ textAlign: "center" }}
                    >
                      <button
                        className="theme-btn"
                        type="submit"
                        disabled={loading || googleLoading}
                      >
                        {loading ? <div className="spinner"></div> : "Sign In"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {googleLoading && (
                <div className="loader" style={{ textAlign: "center" }}>
                  Redirecting...
                </div>
              )}
              {error && (
                <div
                  className="error-message"
                  style={{ color: "red", textAlign: "center" }}
                >
                  {error}
                </div>
              )}
              <div className="other-text" style={{ textAlign: "center" }}>
                Don't have an account? <a href="/sign-up">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
}
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(233, 175, 50, 0.1);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
