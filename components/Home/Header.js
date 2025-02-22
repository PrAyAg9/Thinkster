import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import links from "../../data/linkData";
import useSticky from "../../hooks/useSticky";
import { searchText } from "../../redux/features/coursesSlice";
import { useRouter } from "next/router";
import Sidebar from "../common/SideBar";
import Image from "next/image";

const Header = () => {
  // Sticky header hook
  const { headerSticky } = useSticky();

  // Search state
  const [searchValue, setSearchValue] = useState("");
  // Redux dispatch
  const dispatch = useDispatch();
  // Next.js router for navigation
  const router = useRouter();
  // Sidebar state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      dispatch(searchText(searchValue));
      router.push("/search-courses");
    }
  };

  return (
    <>
      <header>
        <div className="header__area">
          {/* Top Header */}
          <div className="header__top header__border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                {/* Contact Info */}
                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
                  <div className="header__info">
                    <ul>
                      <li>
                        <a href="mailto:info@educal.com">
                          <svg viewBox="0 0 15 13">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5163 7.93224C7.11179 7.93224 6.70849 7.79861 6.37109 7.53136L3.65922 5.34493C3.46391 5.18772 3.43368 4.90172 3.59029 4.70702C3.7481 4.51292 4.0335 4.48209 4.2282 4.63869L6.93765 6.8227C7.27807 7.09238 7.75756 7.09238 8.1004 6.82028L10.7826 4.6399C10.9773 4.48088 11.2627 4.51111 11.4212 4.70581C11.579 4.8999 11.5493 5.1853 11.3553 5.34372L8.66817 7.52773C8.32835 7.7974 7.92203 7.93224 7.5163 7.93224Z"
                              fill="#4B535A"
                            />
                            <path
                              d="M7.5163 7.93224C7.11179 7.93224 6.70849 7.79861 6.37109 7.53136L3.65922 5.34493C3.46391 5.18772 3.43368 4.90172 3.59029 4.70702C3.7481 4.51292 4.0335 4.48209 4.2282 4.63869L6.93765 6.8227C7.27807 7.09238 7.75756 7.09238 8.1004 6.82028L10.7826 4.6399C10.9773 4.48088 11.2627 4.51111 11.4212 4.70581C11.579 4.8999 11.5493 5.1853 11.3553 5.34372L8.66817 7.52773C8.32835 7.7974 7.92203 7.93224 7.5163 7.93224"
                              stroke="#4B535A"
                              strokeWidth="0.2"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.53063 11.8838H10.4683C10.4695 11.8826 10.4744 11.8838 10.478 11.8838C11.1679 11.8838 11.7798 11.6371 12.249 11.1685C12.7938 10.6261 13.0931 9.8467 13.0931 8.97418V4.82142C13.0931 3.13262 11.989 1.90699 10.4683 1.90699H4.53184C3.01113 1.90699 1.90703 3.13262 1.90703 4.82142V8.97418C1.90703 9.8467 2.20694 10.6261 2.75113 11.1685C3.22034 11.6371 3.83286 11.8838 4.52216 11.8838H4.53063ZM4.52029 12.7908C3.58731 12.7908 2.7541 12.4521 2.11075 11.8112C1.39423 11.0965 1 10.0892 1 8.97418V4.82141C1 2.64284 2.51829 1 4.53178 1H10.4683C12.4818 1 14.0001 2.64284 14.0001 4.82141V8.97418C14.0001 10.0892 13.6058 11.0965 12.8893 11.8112C12.2466 12.4515 11.4127 12.7908 10.478 12.7908H10.4683H4.53178H4.52029Z"
                              fill="#4B535A"
                            />
                          </svg>{" "}
                          care@educal.com
                        </a>
                      </li>
                      <li>
                        <Link href="https://maps.app.goo.gl/dF1eDiqTMUgoxWvj9">
                          <a target="_blank" rel="noreferrer">
                            
                            <svg
                              width="12"
                              height="14"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.9235 4.66671C5.23068 4.66671 4.66709 5.2303 4.66709 5.92383C4.66709 6.61666 5.23068 7.17953 5.9235 7.17953C6.61632 7.17953 7.17991 6.61666 7.17991 5.92383C7.17991 5.2303 6.61632 4.66671 5.9235 4.66671ZM5.92354 8.25642C4.63698 8.25642 3.59021 7.21037 3.59021 5.9238C3.59021 4.63652 4.63698 3.58975 5.92354 3.58975C7.21011 3.58975 8.25688 4.63652 8.25688 5.9238C8.25688 7.21037 7.21011 8.25642 5.92354 8.25642Z"
                                fill="#4B535A"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.92278 1.07695C3.25058 1.07695 1.07663 3.27172 1.07663 5.96834C1.07663 9.39942 5.11437 12.7422 5.92278 12.9202C6.73119 12.7415 10.7689 9.3987 10.7689 5.96834C10.7689 3.27172 8.59499 1.07695 5.92278 1.07695ZM5.92259 14C4.63459 14 -0.000488281 10.0139 -0.000488281 5.96831C-0.000488281 2.67723 2.65664 0 5.92259 0C9.18854 0 11.8457 2.67723 11.8457 5.96831C11.8457 10.0139 4.18381 14 5.92259 14Z"
                                fill="#4B535A"
                              />
                              <path
                                d="M10.4683 11.8838V11.9838H10.5098L10.539 11.9545L10.4683 11.8838ZM12.249 11.1685L12.1785 11.0976L12.1784 11.0977L12.249 11.1685ZM2.75113 11.1685L2.8218 11.0977L2.82172 11.0976L2.75113 11.1685ZM2.11075 11.8112L2.04013 11.882L2.04017 11.8821L2.11075 11.8112ZM12.8893 11.8112L12.9599 11.8821L12.9599 11.882L12.8893 11.8112ZM4.53063 11.9838H10.4683V11.7838H4.53063V11.9838ZM10.539 11.9545C10.5246 11.969 10.5091 11.9755 10.4998 11.9786C10.4903 11.9816 10.4824 11.9826 10.4781 11.9829C10.4701 11.9836 10.464 11.983 10.464 11.983C10.4634 11.9829 10.463 11.9829 10.4634 11.9829C10.4635 11.9829 10.4646 11.9831 10.4656 11.9831C10.4673 11.9833 10.4721 11.9838 10.478 11.9838V11.7838C10.4802 11.7838 10.482 11.7839 10.483 11.7839C10.484 11.784 10.4846 11.7841 10.4847 11.7841C10.4868 11.7843 10.4818 11.7838 10.4806 11.7837C10.4787 11.7835 10.4709 11.7828 10.4615 11.7836C10.4566 11.784 10.4481 11.7851 10.4381 11.7883C10.4283 11.7915 10.4124 11.7983 10.3976 11.8131L10.539 11.9545ZM10.478 11.9838C11.1931 11.9838 11.8309 11.7274 12.3197 11.2392L12.1784 11.0977C11.7288 11.5467 11.1427 11.7838 10.478 11.7838V11.9838ZM12.3196 11.2393C12.8859 10.6756 13.1931 9.86931 13.1931 8.97418H12.9931C12.9931 9.82408 12.7018 10.5766 12.1785 11.0976L12.3196 11.2393ZM13.1931 8.97418V4.82142H12.9931V8.97418H13.1931ZM13.1931 4.82142C13.1931 3.08749 12.0538 1.80699 10.4683 1.80699H4.53184C3.01113 1.80699 1.90703 3.08749 1.90703 4.82142V8.97418C1.90703 9.8247 2.20694 10.6243 2.75113 11.1685C3.22034 11.6371 3.83286 11.8838 4.52216 11.8838H4.53063ZM4.52216 11.8838C4.81351 11.8838 5.10125 11.8212 5.36695 11.7021L3.65922 9.51286C3.52309 9.44908 3.42269 9.32879 3.37338 9.18638C3.32406 9.04397 3.32955 8.88783 3.38985 8.74973C3.45016 8.61163 3.56288 8.5068 3.69961 8.44804L5.57808 7.07169C5.66624 7.02153 5.77431 7 5.88205 7C5.98979 7 6.09786 7.02153 6.18601 7.07169L8.06448 8.44804C8.20121 8.5068 8.31393 8.61163 8.37423 8.74973C8.43453 8.88783 8.44 9.04397 8.39068 9.18638C8.34137 9.32879 8.24097 9.44908 8.10484 9.51286L6.39711 11.7021C6.66281 11.8212 6.95055 11.8838 7.2419 11.8838H4.52216Z"
                                fill="#4B535A"
                              />
                            </svg>
                            Shatabdi Sqaure, Nagpur.
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Contact Info */}
              </div>
            </div>
          </div>
          {/* Header Bottom */}
          <div
            className={headerSticky ? "header__bottom header__sticky" : "header__bottom"}
            id="header-sticky"
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/img/logo/logo.png"
                          width={120}
                          height={40}
                          alt="Your School logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                {/* Navigation Menu */}
                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {links.map((link) => (
                          <li key={link.id} className={link.submenu ? "has-dropdown" : ""}>
                            <Link href={link.url}>
                              <a>{link.name}</a>
                            </Link>
                            {link.submenu && (
                              <ul className="submenu">
                                {link.submenu.map((sub) => (
                                  <li key={sub.id}>
                                    <Link href={sub.url}>
                                      <a>{sub.name}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Search & Hamburger */}
                <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                    <div className="header__search w-100 d-none d-xl-block">
                      <form onSubmit={handleSubmit}>
                        <div className="header__search-input">
                          <input
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text"
                            placeholder="Search..."
                          />
                          <button className="header__search-btn">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.11117 15.2222C12.0385 15.2222 15.2223 12.0385 15.2223 8.11111C15.2223 4.18375 12.0385 1 8.11117 1C4.18381 1 1.00006 4.18375 1.00006 8.11111C1.00006 12.0385 4.18381 15.2222 8.11117 15.2222Z"
                                stroke="#031220"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17 17L13.1334 13.1333"
                                stroke="#031220"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="header__hamburger ml-50 d-xl-none">
                      <button type="button" onClick={handleShow} className="hamurger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
