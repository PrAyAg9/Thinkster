/* eslint-disable react/no-unknown-property */
import { useRouter } from "next/router";
import Layout from "../../../components/layout/Layout"; // Adjust path as needed

const CurricularDetail = ({ data }) => {
  const router = useRouter();

  // When fallback is true, the page might not be generated yet.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If no data was found, you can show a 404 message or similar.
  if (!data) {
    return <div>No activity found.</div>;
  }

  return (
    <Layout>
      <section className="curricular-detail-area">
        <div className="container">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {/* Render other details as needed. For example, you could include images, dates, etc. */}
        </div>
      </section>
      <style jsx>{`
        .curricular-detail-area {
          padding: 60px 0;
        }
        .curricular-detail-area h1 {
          margin-bottom: 20px;
          font-size: 2.5rem;
        }
        .curricular-detail-area p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Define all possible dynamic paths.
  // Replace these with your dynamic IDs (e.g., by fetching from your data source).
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    // ...add more paths as needed
  ];

  return { paths, fallback: true }; // fallback true for on-demand generation
}

export async function getStaticProps({ params }) {
  const { id } = params;

  // Simulated data fetch – replace this with your real data fetching logic.
  const defaultActivities = [
    {
      _id: "1",
      img_bg: "assets/img/course/course-1.jpg",
      category: "Sports",
      title: "Inter-School Cricket Tournament",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Coach Sharma",
      date: "2023-09-01",
      description: "Join us for an exciting inter-school cricket tournament and cheer for your team!",
    },
    {
      _id: "2",
      img_bg: "assets/img/course/course-1.jpg",
      category: "Arts",
      title: "Annual Art Exhibition 2024",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Ms. Kapoor",
      date: "2023-08-25",
      description: "Explore stunning artworks by our talented students in this annual exhibition.",
    },
    {
      _id: "3",
      img_bg: "assets/img/course/course-1.jpg",
      category: "Music",
      title: "School Band Competition",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Mr. Reddy",
      date: "2023-08-30",
      description: "Witness a musical showdown among the finest school bands in the region!",
    },
    {
      _id: "4",
      img_bg: "assets/img/course/course-1.jpg",
      category: "Dance",
      title: "Classical Dance Performance",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Ms. Verma",
      date: "2023-09-02",
      description: "Experience grace and rhythm as our students perform classical dance routines.",
    },
    {
      _id: "5",
      img_bg: "assets/img/course/course-1.jpg",
      category: "Culture",
      title: "Cultural Fest & Traditions",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Mr. Gupta",
      date: "2023-08-20",
      description: "Celebrate the vibrant cultures and traditions that bring our community together.",
    },
    {
      _id: "6",
      img_bg: "assets/img/course/course-1.jpg",
      category: "Theatre",
      title: "School Drama and Theatre",
      teacher_img: "assets/img/course/course-2.jpg",
      tutor_name: "Ms. Das",
      date: "2023-09-03",
      description: "Watch our budding actors take the stage in a variety of theatrical performances.",
    },
    {
      _id: "7",
      img_bg: "assets/img/course/course-2.jpg",
      category: "Technology",
      title: "Robotics and Coding Workshop",
      teacher_img: "teacher_tech.jpg",
      tutor_name: "Mr. Mehta",
      date: "2023-09-04",
      description: "A hands-on workshop introducing robotics and coding concepts for young innovators.",
    },
  ];

  // Correctly search in defaultActivities.
  const data = defaultActivities.find((activity) => activity._id === id);

  if (!data) {
    return { notFound: true }; // This will render the 404 page if no data is found
  }

  return {
    props: { data },
    revalidate: 10, // Optional: enables Incremental Static Regeneration
  };
}

export default CurricularDetail;
