import CheckoutArea from "../../../components/Checkout/CheckoutArea";
import CouponArea from "../../../components/Checkout/CouponArea";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Checkout = () => {
  return (
    <>
      <SEO pageTitle="Checkout" />
      <Header />
      <BreadCrumb title="Checkout" subtitle="Checkout" />
      <CouponArea />
      <CheckoutArea />
      <Footer />
    </>
  );
};

export default Checkout;
