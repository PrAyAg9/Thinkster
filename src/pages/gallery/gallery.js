/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import 'react-image-lightbox/style.css';

// Dynamically load react-image-lightbox to ensure Next.js compatibility (client-side only)
const Lightbox = dynamic(() => import("react-image-lightbox"), { ssr: false });

export default function Gallery() {
  // Base images that will be repeated to form a 5x5 grid (25 images)
  const baseImages = [
    { src: "/assets/img/gallery/gallery-img01.jpg", alt: "Gallery Image 1" },
    { src: "/assets/img/gallery/gallery-img02.jpg", alt: "Gallery Image 2" },
    { src: "/assets/img/gallery/gallery-img03.jpg", alt: "Gallery Image 3" },
    { src: "/assets/img/gallery/gallery-img04.jpg", alt: "Gallery Image 4" },
    { src: "/assets/img/gallery/gallery-img05.jpg", alt: "Gallery Image 5" },
    { src: "/assets/img/gallery/gallery-img06.jpg", alt: "Gallery Image 6" },
  ];

  // Create an array of 25 images using modulo repetition of the base images
  const galleryImages = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: baseImages[i % baseImages.length].src,
    alt: `Gallery Image ${i + 1}`,
  }));

  // State to track the current photo index and lightbox open status
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // When an image is clicked, open the lightbox with the corresponding index
  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery-area">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our School Gallery</h2>
          <p>
            Browse through our extensive collection of school images and get a glimpse
            of our vibrant campus life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={620}
                height={480}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* React Image Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex].src}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length].src}
          prevSrc={
            galleryImages[
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
          imageCaption={galleryImages[photoIndex].alt}
        />
      )}

      <style jsx>{`
        .gallery-area {
          padding: 40px 0 90px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }
        /* Gallery Grid with 5 columns */
        .gallery-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .gallery-item {
          flex: 0 0 20%;
          max-width: 20%;
          cursor: pointer;
          padding: 5px;
        }
        /* Ensure images fill the container */
        .gallery-item :global(img) {
          display: block;
          width: 100%;
          height: auto;
        }
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .gallery-item {
            flex: 0 0 25%;
            max-width: 25%;
          }
        }
        @media (max-width: 768px) {
          .gallery-item {
            flex: 0 0 33.33%;
            max-width: 33.33%;
          }
        }
        @media (max-width: 480px) {
          .gallery-item {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
      `}</style>
    </div>
  );
}
