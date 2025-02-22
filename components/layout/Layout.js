import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import PageHead from "./PageHead";
import Footer1 from "../common/Footer";
import Header1 from "../Home/Header";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  // Mobile Menu state
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <PageHead headTitle={headTitle} />

      {/* Always render Header1 regardless of headerStyle */}
      <Header1
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />


      {(!footerStyle || footerStyle === 1) && <Footer1 />}

      <BackToTop />
      <DataBg />
    </>
  );
}
