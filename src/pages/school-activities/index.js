import Head from 'next/head';
import AboutArea from '../../../components/Home/AboutArea';
import HomeBlog from '../../../components/Home/HomeBlog';
import Campus from '../../../components/Home/Campus';
import CounterArea from '../../../components/Home/CounterArea';
import Features from '../../../components/Home/Features';
import Header from '../../../components/Home/Header';
import HeroArea from '../../../components/Home/HeroArea';
// import HomeCourses from '../../../components/Home/HomeCourses';
import SchoolActivities from '../../../components/More/SchoolActivities';
import Cta from '../../../components/Home/Cta';
import Footer from '../../../components/common/Footer';
import SEO from '../../../components/seo';
import ExtraActivities from '../../../components/More/extraActivities'

export default function extraactivites() {
  return (
    <>
       <SEO pageTitle="Extra Curicullar" />

      <Header/>
      <SchoolActivities />
      <Footer/>
    </>
  )
}
