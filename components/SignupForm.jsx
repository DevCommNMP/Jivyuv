"use client";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${SERVER_URL}/api/auth/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Handle successful response
        console.log('Signup successful');
      } else {
        // Handle error response
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="register-section sec-pad">
        <div className="anim-icon">
          <div
            className="icon anim-icon-1"
            style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}
          ></div>
          <div
            className="icon anim-icon-2"
            style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}
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
              <form onSubmit={handleSubmit} className="register-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                        required
                      />
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
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                            />
                            <span className="material-control-indicator"></span>
                            <span className="description">
                              I accept{' '}
                              <Link href="book-appointment">terms</Link> and{' '}
                              <Link href="book-appointment">conditions</Link>{' '}
                              and general policy
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group message-btn">
                      <button type="submit" className="theme-btn" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
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