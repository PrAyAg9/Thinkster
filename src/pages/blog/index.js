import React from "react";
import BlogArea from "../../../components/Blog/BlogArea";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";

const Blog = () => {
  return (
    <>
      <SEO pageTitle="Blog" />
      <Header />
      <BreadCrumb title="Our Blog" subtitle="Blog" />
      <BlogArea />
      <Footer />
    </>
  );
};

export default Blog;
