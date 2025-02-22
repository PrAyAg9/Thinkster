import { useRouter } from "next/router";
import achievementsData from "../../../data/achievements.json";
import Header from "../../../components/Home/Header";
import Footer from "../../../components/common/Footer";
import SEO from "../../../components/seo";
import Image from "next/image";

export default function AchievementDetails({ achievement }) {
  const router = useRouter();

  // When fallback is enabled, show a loading indicator while the page is being generated.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If no achievement is found, render a not found message.
  if (!achievement) {
    return <div>Achievement not found.</div>;
  }

  return (
    <>
      <SEO pageTitle={achievement.title} />
      <Header />
      <main className="container mx-auto py-10 px-5">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Image
            src={achievement.img_bg}
            alt={achievement.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{achievement.title}</h1>
          <p className="text-gray-600 mt-2">{achievement.description}</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src={achievement.teacher_img}
              alt={achievement.tutor_name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{achievement.tutor_name}</p>
              <p className="text-sm text-gray-500">
                {new Date(achievement.date).toDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // Generate all possible paths from your achievements data.
  const paths = achievementsData.map((item) => ({
    params: { id: item._id },
  }));

  return {
    paths,
    fallback: false, // set to 'true' if you expect new achievements to be added later
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  // Find the achievement with the matching _id from your data.
  const achievement = achievementsData.find((item) => item._id === id);

  if (!achievement) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      achievement,
    },
    revalidate: 10, // Optional: re-generate the page every 10 seconds (ISR)
  };
}
