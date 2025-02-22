import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Link from "next/link";
import Collapsible from "react-collapsible";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { searchText } from "../../redux/features/coursesSlice";
import Image from "next/image";
import links from "../../data/linkData"; // Provided link data
import LoginData from "../../data/LoginMenuData";

const Sidebar = ({ show, handleClose }) => {
  const { user, logout } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      dispatch(searchText(searchValue));
      router.push("/search-courses");
    }
  };

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="side__bar"
      >
        <Offcanvas.Header closeButton>
          {/* Flex wrapper for logo and close button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="offcanvas__logo logo">
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/assets/img/logo/logo.png"
                    width={150}
                    height={50}
                    alt="logo"
                    priority
                  />
                </a>
              </Link>
            </div>
            <div className="offcanvas__close">
              <button
                className="offcanvas__close-btn"
                onClick={handleClose}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="sidebar__content">
            <div className="offcanvas__search mb-25">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="What are you searching for?"
                />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </form>
            </div>

            <div className="mobile-menu">
              <nav id="mobile-menu">
                <ul>
                  {/* Non-authenticated menu: iterate over provided links */}
                  {!user?.email &&
                    links.map((link) =>
                      link.submenu ? (
                        <Collapsible
                          key={link.id}
                          trigger={
                            <Link href={link.url} passHref>
                              <a>{link.name}</a>
                            </Link>
                          }
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            {link.submenu.map((sub_menu) => (
                              <li key={sub_menu.id}>
                                <Link href={sub_menu.url} passHref>
                                  <a>{sub_menu.name}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Collapsible>
                      ) : (
                        <div key={link.id} className="single_link iconAdd">
                          <li>
                            <Link href={link.url} passHref>
                              <a>{link.name}</a>
                            </Link>
                          </li>
                        </div>
                      )
                    )}

                  {/* Authenticated menu */}
                  {user?.email &&
                    LoginData.map((link) => (
                      <li
                        key={link.id}
                        className={link.submenu ? "has-dropdown" : ""}
                      >
                        <Link href={link.url} passHref>
                          <a>{link.name}</a>
                        </Link>
                        {link.submenu && (
                          <ul className="submenu">
                            {link.submenu.map((sub_menu) => (
                              <li key={sub_menu.id}>
                                <Link href={sub_menu.url} passHref>
                                  <a>{sub_menu.name}</a>
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

            <div className="offcanvas__contact mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps"
                    >
                      12/A, Mirnada Nagpur City, MH
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:support@gmail.com">093898734</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+012-345-6789">care@iqnaut.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
