/* eslint-disable react/no-unknown-property */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { committeeMembers } from "../../../data/committee_members.json";

function SchoolComitte() {
  return (
    <>
      <section className="mentors-area pt-20 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title text-center mb-50">
                <h2 className="title">School Managing Committee</h2>
                <p className="pb-20">
                  Our dedicated team of professionals guiding the school towards excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            {committeeMembers.map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-sm-6 col-12 d-flex justify-content-center"
              >
                <div className="mentors__item w-100">
                  <div className="mentors__img">
                    <Link href={`#`} passHref>
                      <a>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={200}
                          height={200}
                          objectFit="cover"
                          style={{ background: member.bgColor }}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mentors__content">
                    <div className="mentors__content-top">
                      <h4 className="name">
                        <Link href={`#`} passHref>
                          <a>{member.name}</a>
                        </Link>
                      </h4>
                      <span className="designation">{member.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .section__title {
          text-align: center;
        }
        .section__title .title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .section__title p {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          color: #555;
        }
        /* On mobile, override the card width to center it nicely */
        @media (max-width: 576px) {
          .mentors__item {
            width: auto !important;
            max-width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}

export default SchoolComitte;
