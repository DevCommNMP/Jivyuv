export default function LoginForm() {
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
                <li>
                  <a href="signup.html">
                    <span>Sign In with Facebook</span>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="signup.html">
                    <span>Sign In with Google</span>
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="signup.html">
                    <span>Sign In with Twitter</span>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="text">
                <span>or</span>
              </div>
              <form action="login.html" method="post" className="register-form">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" name="name" required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="password" required />
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
                    <div className="form-group message-btn">
                      <button type="submit" className="theme-btn">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="other-text">
                Already have an account? <a href="signup.html">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
