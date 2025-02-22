// import StaffCard from "../../../components/common/StaffCard";
// import Layout from "../../../components/layout/Layout";
// import staffData from "../../../data/staff_data.json";
// import Footer from '../../../components/common/Footer';
// import Header from "../../../components/Home/Header";

// function Staff() {
//   return (
//     <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Staffs">
//       <section className="instructor-area pt-120 pb-70">
//         <div className="container">
//           <div className="row justify-content-center">
//             {staffData.staffMembers.map((staff) => (
//               <div key={staff.id} className="col-xl-3 col-lg-4 col-sm-6">
//                 <StaffCard staff={staff} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Staff;

import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/Home/Header";
import Staff from "./staff"
import SEO from "../../../components/seo";

const Register = () => {
  return (
    <>
      <SEO pageTitle="Sign Up" />
      <Header />
      <Staff />
      <Footer />
    </>
  );
};

export default Register;
