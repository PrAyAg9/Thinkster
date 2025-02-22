import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { committeeMembers } from "../../../data/committee_members.json";
import Image from "next/image";

export default function CommitteeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [committeeDetails, setCommitteeDetails] = useState(null);

  useEffect(() => {
    if (id) {
      const member = committeeMembers.find(
        (committee) => committee.id === parseInt(id)
      );
      setCommitteeDetails(member);
    }
  }, [id]);

  if (!committeeDetails) {
    return null;
  }

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Committee Details"
      >
        <section className="instructor-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instructor-details-wrap">
                  <div className="instructor-details-img">
                    <Image
                      src={committeeDetails.image}
                      alt={committeeDetails.name}
                      layout="responsive"
                      width={300}
                      height={350}
                      objectFit="cover"
                    />
                  </div>
                  <div className="instructor-details-content">
                    <div className="content-top">
                      <div className="left-side-content">
                        <h2 className="title">{committeeDetails.name}</h2>
                        <span className="designation">
                          {committeeDetails.role}
                        </span>
                      </div>
                    </div>
                    <div className="instructor-info-wrap">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-email" />
                          <Link href={`mailto:${committeeDetails.email}`}>
                            <a>{committeeDetails.email}</a>
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-mortarboard" />
                          {committeeDetails.qualification}
                        </li>
                      </ul>
                    </div>
                    <div className="bio-content">
                      <h4 className="title">About:</h4>
                      <p>{committeeDetails.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .instructor-details-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 40px;
        }
        .instructor-details-img {
          max-width: 300px;
          max-height: 350px;
          width: 100%;
        }
        /* To target the next/image rendered img, we can use :global */
        .instructor-details-img :global(img) {
          width: 100%;
          height: 350px;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }
        .instructor__shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          max-height: 300px;
          z-index: 0;
        }
        .instructor-details-content {
          flex: 1;
        }
        @media (max-width: 991px) {
          .instructor-details-wrap {
            flex-direction: column;
            text-align: center;
          }
          .instructor-details-img {
            margin-bottom: 30px;
          }
          .content-top {
            justify-content: center;
          }
          .instructor-info-wrap ul {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
