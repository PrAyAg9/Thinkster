import React from "react";
import CartArea from "../../../components/Cart/CartArea";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Cart = () => {
  return (
    <>
      <SEO pageTitle="Cart" />
      <Header />
      <BreadCrumb title="My Cart" subtitle="Cart" />
      <CartArea />
      <Footer />
    </>
  );
};

export default Cart;
