// pages/about-us/[about_details].js
import { useRouter } from "next/router";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/seo";
import DynamicPageHeader from "../../../components/common/DynamicPageHeader";
import AboutUsArea from "../../../components/AboutUs/AboutUsArea";

const AboutDetails = () => {
  const router = useRouter();
  // In a dynamic scenario, you might use router.query.about_details
  return (
    <>
      <SEO pageTitle="About Us" />
      <DynamicPageHeader />
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {/* The main About Us content with sidebar is already defined in AboutUsArea */}
            <AboutUsArea />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutDetails;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
