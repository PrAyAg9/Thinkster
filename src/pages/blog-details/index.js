import React from "react";
import BlogDetailsArea from "../../../components/BlogDetails/BlogDetailsArea";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const BlogDetails = () => {
  return (
    <>
      <SEO pageTitle="Blog Details" />
      <Header />
      <BlogDetailsArea />
      <Footer />
    </>
  );
};

export default BlogDetails;
