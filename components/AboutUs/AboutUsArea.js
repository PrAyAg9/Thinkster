"use client"; // Ensures the component runs only on the client

import React from "react";
import Image from "next/image";
import AboutRightSide from "./AboutRightSide";

const AboutUsArea = () => {
  return (
    <section className="blog__area pt-20 pb-60">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper postbox__details pr-20">
              <div className="postbox__item transition-3 mb-70">
                {/* Header Image */}
                <div className="postbox__thumb m-img">
                  <Image
                    src="/assets/img/campus1/campus-2.jpg"
                    width={800}
                    height={450}
                    layout="responsive"
                    alt="About Us"
                    priority
                  />
                </div>
                <div className="postbox__content">
                  <div className="postbox__meta">
                    <span>
                      <i className="far fa-calendar-check"></i> Established: 1950
                    </span>
                    <span>
                      <a href="#">
                        <i className="far fa-user"></i> Modern Indian School
                      </a>
                    </span>
                  </div>
                  <h3 className="postbox__title">
                    Welcome to Modern Indian School
                  </h3>
                  <div className="postbox__text mb-40">
                    <p>
                      Modern Indian School has been a pioneer in quality education,
                      nurturing young minds with values and skills to thrive in a
                      rapidly changing world. Our legacy is built on commitment,
                      excellence, and innovation.
                    </p>
                  </div>
                  {/* Quote Section */}
                  <div className="postbox__quote grey-bg-2 mb-45 p-relative fix">
                    <blockquote>
                      <p>
                        &quot;Education is the most powerful weapon which you can use to change the world.&quot;
                      </p>
                      <h4>Nelson Mandela</h4>
                    </blockquote>
                  </div>
                  <div className="postbox__text mb-30">
                    <p>
                      Our mission is to foster a nurturing environment where every student
                      can achieve their fullest potential—both academically and personally.
                      We offer a diverse curriculum, modern facilities, and an inspiring
                      community to prepare our students for the challenges of tomorrow.
                    </p>
                  </div>
                  {/* Website Link */}
                  <div className="postbox__link mb-35">
                    <p>
                      To learn more about our programs and campus initiatives, visit our website:{" "}
                      <a
                        href="https://modernindianschool.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        modernindianschool.com
                      </a>
                    </p>
                  </div>
                  {/* Additional Image */}
                  <div className="postbox__img w-img mb-45">
                    <Image
                      src="/assets/img/campus1/campus-1.jpg"
                      width={800}
                      height={450}
                      layout="responsive"
                      alt="Our Campus"
                    />
                  </div>
                  <div className="postbox__text mb-40">
                    <h3>Excellence in Education</h3>
                    <p>
                      Our dedicated faculty and state-of-the-art facilities provide a nurturing
                      environment that encourages academic achievement, personal growth, and
                      community engagement.
                    </p>
                    <p>
                      Join us in our journey to shape the future with knowledge, creativity, and
                      passion.
                    </p>
                  </div>
                  <div className="postbox__line"></div>
                  <div className="postbox__meta-3 d-sm-flex align-items-center">
                    <span>Tags :</span>
                    <div className="tagcloud">
                      <a href="#">Education</a>
                      <a href="#">Excellence</a>
                      <a href="#">Community</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <AboutRightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsArea;
