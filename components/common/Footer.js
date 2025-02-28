/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__black"
          style={{ backgroundColor: "#0E1133", color: "#fff" }}
        >
          <div
            className="footer__top pt-95 pb-45"
            style={{ backgroundColor: "#0E1133", color: "#fff" }}
          >
            <div className="container">
              <div className="row footer__widgets">
                {/* Footer Widget 1 */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 footer-widget">
                  <div className="footer__widget footer-col-1 mb-50">
                    <div className="footer__logo">
                      <div className="logo">
                        <Link href="/" passHref>
                          <a>
                            <Image
                              src="/assets/img/logo/logo-white.png"
                              alt="Your School logo"
                              width={150}
                              height={50}
                              priority
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__widget-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Nunc maximus, nulla ut commodo sagittis.
                        </p>
                        {/* This social block is visible on desktop only */}
                        <div className="footer__social">
                          <h4>Follow Us</h4>
                          <ul>
                            <li>
                              <a href="#" className="fb">
                                <i className="fa-brands fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tw">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="pin">
                                <i className="fa-brands fa-pinterest-p"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 2 */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5 footer-widget">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Explore</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Success story</a>
                        </li>
                        <li>
                          <a href="#">Courses</a>
                        </li>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Instructor</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 3 */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5 footer-widget">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Links</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <a href="#">News & Blogs</a>
                        </li>
                        <li>
                          <a href="#">Library</a>
                        </li>
                        <li>
                          <a href="#">Gallery</a>
                        </li>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Membership</a>
                        </li>
                        <li>
                          <a href="#">Career</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 4 */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7 footer-widget">
                  <div className="footer__widget footer-col-4 mb-50">
                    <h3 className="footer__widget-title">Newsletter</h3>
                    <div className="footer__subscribe">
                      <p>
                        Receive weekly newsletter with educational materials,
                        popular books and much more!
                      </p>
                      <form action="#">
                        <div className="footer__subscribe-input">
                          <input type="text" placeholder="Email" />
                          <button type="submit" className="tp-btn-subscribe">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile-only social icons block */}
              <div className="footer__social-mobile">
                <ul>
                  <li>
                    <a href="#" className="fb">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tw">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pin">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="footer__bottom"
            style={{ backgroundColor: "#0E1133", color: "#fff" }}
          >
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="footer__copyright text-center">
                      <p>© 2024 IQNaut. All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        a {
          color: #fff;
        }
        /* Hide the mobile social block by default */
        .footer__social-mobile {
          display: none;
        }
        /* Mobile view adjustments */
        @media only screen and (max-width: 580px) {
          /* Stack the footer widgets in a grid (2 columns) */
          .footer__widgets {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .footer-widget {
            text-align: center;
            padding: 10px;
          }
          /* Reduce top and bottom padding */
          .footer__top {
            padding-top: 40px;
            padding-bottom: 30px;
          }
          .footer__bottom {
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .footer__widget-title {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }
          .footer__widget-info p,
          .footer__widget-content ul li a {
            font-size: 0.9rem;
          }
          .footer__subscribe p {
            font-size: 0.9rem;
          }
          .footer__subscribe-input input {
            width: 100%;
            padding: 8px;
            font-size: 0.9rem;
          }
          /* Make the subscribe button smaller */
          .tp-btn-subscribe {
            padding: 6px 10px;
            font-size: 0.8rem;
          }
          /* Hide the social icons inside widget 1 */
          .footer__social {
            display: none;
          }
          /* Show the mobile-only social icons block */
          .footer__social-mobile {
            display: block;
            text-align: center;
            margin-top: 20px;
          }
          .footer__social-mobile ul {
            display: flex;
            justify-content: center;
            gap: 10px;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .footer__social-mobile li a {
            font-size: 1.2rem;
            color: #fff;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
