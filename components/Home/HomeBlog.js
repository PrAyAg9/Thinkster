import Link from "next/link";
import { useGetBlogsQuery } from "../../redux/api/apiSlice";

const HomeBlog = () => {
  const { data: blogs, isError, isLoading } = useGetBlogsQuery();

  let content = null;

  if (isLoading && !isError) {
    content = (
      <div className="container">
        <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
      </div>
    );
  }

  if (!isLoading && !isError && (!blogs || blogs.length === 0)) {
    content = <h2>No Blogs Found</h2>;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    // Only take first 3 blog items (service 1, 2, 3)
    content = blogs.slice(0, 3).map((blog) => {
      const { img, title, category, date, views, _id } = blog;
      return (
        <div key={_id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div className="blog__item mb-30 white-bg transition-3">
            <div className="blog__thumb w-img fix">
              <Link href={`/blog-details/${_id}`}>
                <a>
                  <img src={img || "/assets/img/services/service-1.jpg"} alt={title} />
                </a>
              </Link>
            </div>
            <div className="blog__content">
              <div className="blog__tag">
                <Link href={`/blog-details/${_id}`}>
                  <a>{category}</a>
                </Link>
              </div>
              <h3 className="blog__title">
                <Link href="/community-services">
                  <a>{title.substring(0, 35)}...</a>
                </Link>
              </h3>
              <div className="blog__meta">
                <ul>
                  <li>
                    <span>
                      <a href="#">{date}</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#">{views}</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="blog__area pt-90 pb-35 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper mb-60 text-center">
              <span className="section__title-pre">Top News of Our School</span>
              <h2 className="section__title section__title-44">
                Trending News about ABC School
              </h2>
            </div>
          </div>
        </div>
        <div className="row">{content}</div>
      </div>
    </section>
  );
};

export default HomeBlog;
