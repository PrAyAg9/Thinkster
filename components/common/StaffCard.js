/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import Image from "next/image";
import React from "react";

const StaffCard = ({ staff, showSocial = false }) => {
  return (
    <div className="instructor__item">
      <div className="instructor__img">
        {staff.shape && (
          <div className="instructor__shape" style={staff.shape} />
        )}
        <Link href={`#`} passHref>
          <Image
            src={staff.image}
            alt={`${staff.name} - ${staff.designation}`}
            width={250}
            height={300}
            className="img-fluid"
            objectFit="cover"
          />
        </Link>
      </div>
      <div className="instructor__content">
        <div className="left">
          <span className="designation">{staff.designation}</span>
          <h4 className="name">
            <Link href={`#`} passHref>
              {staff.name}
            </Link>
          </h4>
        </div>

        {/* Social Media Icons (Optional) */}
        {showSocial && staff.socials && (
          <div className="right">
            <span className="share">
              <i className="flaticon-share" />
            </span>
            <ul className="social-list list-wrap">
              {staff.socials.map((social, index) => (
                <li key={index}>
                  <Link href={social.link} passHref>
                    <i className={`fab fa-${social.platform}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        .instructor__img img {
          width: 250px;
          height: 300px;
          object-fit: cover;
        }

        @media (min-width: 768px) {
          .instructor__img img {
            height: 300px;
          }
        }

        @media (min-width: 992px) {
          .instructor__img img {
            height: 350px;
          }
        }

        @media only screen and (max-width: 580px) {
          .instructor__item {
            margin: 0 auto;
            text-align: center;
          }
          .instructor__img {
            margin: 0 auto;
          }
          .instructor__content {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default StaffCard;
