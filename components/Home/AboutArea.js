import Link from "next/link";
import Image from "next/image";

const AboutArea = ({
  about_pt = "",
  principalImage,
  principalName,
  schoolName,
}) => {
  return (
    <section
      className={`about__area pt-60 pb-100 p-relative ${about_pt}`}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Principal's Image */}
          <div className="col-xxl-5 col-xl-5 col-lg-5 order-lg-2 order-1">
            <div className="about__thumb-wrapper p-relative text-center">
              <div className="about__thumb">
                <Image
                  src={principalImage || "/assets/img/about/1.jpg"}
                  alt={principalName || "Principal"}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Principal's Message */}
          <div className="col-xxl-7 col-xl-7 col-lg-7 order-lg-1 order-2">
            <div className="about__content pl-30 pr-25 text-lg-start text-center">
              <div className="section__title-wrapper mb-15">
                <span className="section__title-pre">
                  {schoolName || "IQNaut High School"}
                </span>
                <h2 className="section__title">Principal&apos;s Message</h2>
              </div>
              <p>
                Welcome to IQNaut, where we are dedicated to fostering an
                environment of academic excellence and personal growth. Our
                mission is to empower every student to reach their full
                potential through a comprehensive and innovative curriculum,
                dedicated faculty, and state-of-the-art facilities.
              </p>
              <div className="about__btn">
                <Link href="/principal-message">
                  <a className="tp-btn tp-btn-2">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
