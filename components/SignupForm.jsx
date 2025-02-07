import Link from "next/link";

export default function SignupForm() {
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
              <p>Sign Up</p>
              <h2>Connect with us for Better Tour</h2>
            </div>
            <div className="form-inner">
              <h3>Sign Up with</h3>
              <ul className="social-links clearfix">
                <li>
                  <Link href="signup">
                    <span>Sign In with Facebook</span>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="signup">
                    <span>Sign In with Google</span>
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                </li>
                <li>
                  <Link href="signup">
                    <span>Sign In with Twitter</span>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
              </ul>
              <div className="text">
                <span>or</span>
              </div>
              <form action="signup" method="post" className="register-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" name="fname" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="lname" required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" required />
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
                      <label>Confirm Password</label>
                      <input type="password" name="password2" required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <div className="custom-check-box">
                        <div className="custom-controls-stacked">
                          <label className="custom-control material-checkbox">
                            <input
                              type="checkbox"
                              className="material-control-input"
                            />
                            <span className="material-control-indicator"></span>
                            <span className="description">
                              I accept{" "}
                              <Link href="book-appointment">terms</Link> and{" "}
                              <Link href="book-appointment">conditions</Link>{" "}
                              and general policy
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group message-btn">
                      <button type="submit" className="theme-btn">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="other-text">
                Already have an account? <Link href="login">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
