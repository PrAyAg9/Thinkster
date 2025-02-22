import Link from "next/link";
import Image from "next/image";

const achievementsData = [
  {
    id: "1",
    title: "National Sports Championship",
    description:
      "Our school clinched the national championship in track and field, setting new records.",
    image: "/assets/img/blog/achievement-7.jpg",
    category: "Sports",
    year: "2024",
  },
  {
    id: "2",
    title: "Academic Excellence Award",
    description:
      "Recognized for outstanding academic performance at a national level.",
    image: "/assets/img/blog/achievement-2.jpg",
    category: "Academics",
    year: "2023",
  },
  {
    id: "3",
    title: "Olympiad Winners",
    description:
      "Our students excelled and secured top positions in international olympiads.",
    image: "/assets/img/blog/achievement-4.jpg",
    category: "Olympiads",
    year: "2022",
  },
  {
    id: "4",
    title: "Cultural Fest Excellence",
    description:
      "Awarded for the best cultural program that celebrated diversity and talent.",
    image: "/assets/img/blog/achievement-3.jpg",
    category: "Cultural",
    year: "2023",
  },
  {
    id: "5",
    title: "Innovation in Technology",
    description:
      "Honored for groundbreaking projects and innovative technological solutions.",
    image: "/assets/img/blog/achievement-6.jpg",
    category: "Innovation",
    year: "2024",
  },
  {
    id: "6",
    title: "Community Service Award",
    description:
      "Recognized for significant contributions to community welfare and service.",
    image: "/assets/img/blog/achievement-1.jpg",
    category: "Community",
    year: "2021",
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
      <div className="achievement__item white-bg transition-3 mb-30">
        <div
          className="achievement__thumb w-img fix course_thumb_height"
          style={{ position: "relative", width: "100%", height: "300px" }}
        >
          <Image
            src={achievement.image}
            alt={achievement.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="achievement__content p-relative pt-3 pb-3 px-3">
          <div className="achievement__tag mb-2">
            <span>{achievement.category}</span>
          </div>
          <h3 className="achievement__title mb-2">{achievement.title}</h3>
          <p className="mb-2">{achievement.description}</p>
          <div className="achievement__bottom d-sm-flex align-items-center justify-content-between">
            <p className="achievement__year mb-0">{achievement.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchoolAchievements = () => {
  return (
    <section className="course__area grey-bg-3 pt-40">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper text-center mb-60">
              <span className="section__title-pre">Recognizing Excellence</span>
              <h2 className="section__title section__title-44">
                Awards & Achievements
              </h2>
              <p>
                Our prestigious national school has been honored with awards in
                sports, academic competitions, olympiads, cultural fests, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="row">{achievementsData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}</div>
      </div>
    </section>
  );
};

export default SchoolAchievements;
