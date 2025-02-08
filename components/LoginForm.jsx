"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Form Data", formData);
  return (
    <>
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
                {/* <li>
                  <a href="signup.html">
                    <span>Sign In with Facebook</span>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li> */}
                <li>
                  <Link href="signup">
                    <span>Sign In with Google</span>

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
                {/* <li>
                  <a href="signup.html">
                    <span>Sign In with Twitter</span>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
              </ul>
              <div className="text">
                <span>or</span>
              </div>
              <form action="login.html" method="post" className="register-form">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Password</label>
                      {/* <input type="password" name="password" required /> */}
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <div className="forgor-password text-right">
                        <a href="login.html">Forget Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div
                      className="form-group message-btn"
                      style={{ textAlign: "center" }}
                    >
                      <button type="submit" className="theme-btn">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="other-text" style={{ textAlign: "center" }}>
                Already have an account? <a href="/sign-up">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
