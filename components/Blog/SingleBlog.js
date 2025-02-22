import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules"; // ✅ Correct Import
import Link from "next/link";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";
import { useState } from "react";
import Image from "next/image";

const SingleBlog = ({ blog }) => {
  // modal state
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "70%",
            padding: "unset",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          closeButton: {
            background: "yellow",
          },
        }}
        center
      >
        <ReactPlayer
          url="https://youtu.be/-WRZI63emjs"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>

      <article className="postbox__item format-image mb-50 transition-3">
        {!blog?.slider && blog?.videoPopup ? (
          <div className="postbox__thumb postbox__video w-img p-relative">
            <Link href={`/blog-details/${blog?._id}`}>
              <a>
                <img src={blog?.img} alt="" />
              </a>
            </Link>
            <button
              onClick={onOpenModal}
              className="play-btn pulse-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        ) : (
          !blog?.slider && (
            <div className="postbox__thumb w-img">
              <Link href={`/blog-details/${blog?._id}`}>
                <a>
                  <img src={blog?.img} alt="" />
                </a>
              </Link>
            </div>
          )
        )}

        {blog?.slider && (
          <div className="postbox__slider p-relative">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000 }}
              effect={"fade"}
              navigation={true} // ✅ Navigation enabled
              modules={[Navigation, EffectFade]} // ✅ Correct module usage
            >
              <SwiperSlide>
                <img src="assets/img/blog/blog-big-4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/img/blog/blog-big-5.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/img/blog/blog-big-6.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        <div className="postbox__content">
          <div className="postbox__meta">
            <span>
              <i className="far fa-calendar-check"></i> {blog?.date}{" "}
            </span>
            <span>
              <a href="#">
                <i className="far fa-user"></i> {blog?.blog_author}{" "}
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fal fa-comments"></i> 02 Comments
              </a>
            </span>
          </div>
          <h3 className="postbox__title">
            <Link href={`/blog-details/${blog?._id}`}>
              <a>{blog?.title}</a>
            </Link>
          </h3>
          <div className="postbox__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="postbox__read-more">
            <Link href={`/blog-details/${blog?._id}`}>
              <a className="tp-btn">read more</a>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleBlog;
