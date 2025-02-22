import Image from "next/image";
import researchData from "../../data/researchData.json";

const ResearchArea = () => {
  return (
    <section className="research__area research__border grey-bg-3 pt-20 pb-20 p-relative z-index-1">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper mb-20 text-center">
              <span className="section__title-pre">New Horizons</span>
              <h2 className="section__title section__title-44">Vision & Mission</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {researchData.map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div
                className={`research__item ${
                  item.border ? item.border : ""
                } text-center mb-20 transition-3`}
              >
                <div
                  className="research__thumb mb-20"
                  style={{ position: "relative", width: "100%", height: "260px" }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="research__content">
                  <h3
                    className="research__title"
                    style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchArea;
