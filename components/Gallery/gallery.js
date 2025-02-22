// import React, { useState, useCallback } from 'react';
// // import Gallery from 'react-photo-gallery';
// // import Carousel, { Modal, ModalGateway } from 'react-images';

// // Directories data (each object represents an event folder with a cover image and multiple photos)
// const directories = [
//   {
//     id: 1,
//     event: 'Gudipadwa',
//     year: '2015',
//     coverPhoto: 'assets/img/course/course-1.jpg',
//     photos: [
//       { src: 'assets/img/course/course-1.jpg', width: 8, height: 6, alt: 'Gudipadwa 2015 Photo 1' },
//       { src: 'assets/img/course/course-2.jpg', width: 6, height: 8, alt: 'Gudipadwa 2015 Photo 2' },
//       { src: 'assets/img/course/course-3.jpg', width: 7, height: 5, alt: 'Gudipadwa 2015 Photo 3' },
//     ],
//   },
//   {
//     id: 2,
//     event: 'Holi',
//     year: '2016',
//     coverPhoto: 'assets/img/course/course-3.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Holi+2016+Photo+1', width: 8, height: 6, alt: 'Holi 2016 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Holi+2016+Photo+2', width: 6, height: 8, alt: 'Holi 2016 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Holi+2016+Photo+3', width: 7, height: 5, alt: 'Holi 2016 Photo 3' },
//     ],
//   },
//   {
//     id: 3,
//     event: 'Ganapati',
//     year: '2017',
//     coverPhoto: 'assets/img/course/course-5.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Ganapati+2017+Photo+1', width: 8, height: 6, alt: 'Ganapati 2017 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Ganapati+2017+Photo+2', width: 6, height: 8, alt: 'Ganapati 2017 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Ganapati+2017+Photo+3', width: 7, height: 5, alt: 'Ganapati 2017 Photo 3' },
//     ],
//   },
//   {
//     id: 4,
//     event: 'Independence Day',
//     year: '2018',
//     coverPhoto: 'assets/img/course/course-6.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Independence+Day+2018+Photo+1', width: 8, height: 6, alt: 'Independence Day 2018 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Independence+Day+2018+Photo+2', width: 6, height: 8, alt: 'Independence Day 2018 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Independence+Day+2018+Photo+3', width: 7, height: 5, alt: 'Independence Day 2018 Photo 3' },
//     ],
//   },
//   {
//     id: 5,
//     event: 'Republic Day',
//     year: '2019',
//     coverPhoto: 'assets/img/course/course-2.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Republic+Day+2019+Photo+1', width: 8, height: 6, alt: 'Republic Day 2019 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Republic+Day+2019+Photo+2', width: 6, height: 8, alt: 'Republic Day 2019 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Republic+Day+2019+Photo+3', width: 7, height: 5, alt: 'Republic Day 2019 Photo 3' },
//     ],
//   },
//   {
//     id: 6,
//     event: 'Gudipadwa',
//     year: '2016',
//     coverPhoto: 'https://via.placeholder.com/400x300?text=Gudipadwa+2016',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Gudipadwa+2016+Photo+1', width: 8, height: 6, alt: 'Gudipadwa 2016 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Gudipadwa+2016+Photo+2', width: 6, height: 8, alt: 'Gudipadwa 2016 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Gudipadwa+2016+Photo+3', width: 7, height: 5, alt: 'Gudipadwa 2016 Photo 3' },
//     ],
//   },
//   {
//     id: 7,
//     event: 'Holi',
//     year: '2017',
//     coverPhoto: 'assets/img/course/course-3.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Holi+2017+Photo+1', width: 8, height: 6, alt: 'Holi 2017 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Holi+2017+Photo+2', width: 6, height: 8, alt: 'Holi 2017 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Holi+2017+Photo+3', width: 7, height: 5, alt: 'Holi 2017 Photo 3' },
//     ],
//   },
//   {
//     id: 8,
//     event: 'Ganapati',
//     year: '2018',
//     coverPhoto: 'assets/img/course/course-5.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Ganapati+2018+Photo+1', width: 8, height: 6, alt: 'Ganapati 2018 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Ganapati+2018+Photo+2', width: 6, height: 8, alt: 'Ganapati 2018 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Ganapati+2018+Photo+3', width: 7, height: 5, alt: 'Ganapati 2018 Photo 3' },
//     ],
//   },
//   {
//     id: 9,
//     event: 'Independence Day',
//     year: '2019',
//     coverPhoto: 'assets/img/course/course-2.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Independence+Day+2019+Photo+1', width: 8, height: 6, alt: 'Independence Day 2019 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Independence+Day+2019+Photo+2', width: 6, height: 8, alt: 'Independence Day 2019 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Independence+Day+2019+Photo+3', width: 7, height: 5, alt: 'Independence Day 2019 Photo 3' },
//     ],
//   },
//   {
//     id: 10,
//     event: 'Republic Day',
//     year: '2020',
//     coverPhoto: 'assets/img/course/course-1.jpg',
//     photos: [
//       { src: 'https://via.placeholder.com/800x600?text=Republic+Day+2020+Photo+1', width: 8, height: 6, alt: 'Republic Day 2020 Photo 1' },
//       { src: 'https://via.placeholder.com/600x800?text=Republic+Day+2020+Photo+2', width: 6, height: 8, alt: 'Republic Day 2020 Photo 2' },
//       { src: 'https://via.placeholder.com/700x500?text=Republic+Day+2020+Photo+3', width: 7, height: 5, alt: 'Republic Day 2020 Photo 3' },
//     ],
//   },
// ];

// const GalleryComponent = () => {
//   // Filter state for event and year
//   const [selectedEvent, setSelectedEvent] = useState('All');
//   const [selectedYear, setSelectedYear] = useState('All');

//   // Lightbox (modal) state
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [activeDirectory, setActiveDirectory] = useState(null);

//   // Filter directories based on the selected event and year
//   const filteredDirectories = directories.filter((dir) => {
//     return (
//       (selectedEvent === 'All' || dir.event === selectedEvent) &&
//       (selectedYear === 'All' || dir.year === selectedYear)
//     );
//   });

//   // Prepare gallery items (using the cover image for each directory)
//   const galleryItems = filteredDirectories.map((dir) => ({
//     src: dir.coverPhoto,
//     width: 4,
//     height: 3,
//     alt: `${dir.event} ${dir.year}`,
//     directory: dir, // Attach full directory info
//   }));

//   // Create filter options
//   const eventOptions = ['All', ...new Set(directories.map((dir) => dir.event))];
//   const yearOptions = ['All', ...new Set(directories.map((dir) => dir.year))];

//   // Open lightbox on cover image click, passing the directory photos to the Carousel
//   const openLightbox = useCallback((event, { photo, index }) => {
//     setActiveDirectory(photo.directory);
//     setCurrentImage(0); // Start at first photo of the directory
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setActiveDirectory(null);
//     setViewerIsOpen(false);
//     setCurrentImage(0);
//   };

//   return (
//     <div>
//       {/* Filter Bar */}
//       <div className="filterBar">
//         <div className="filterItem">
//           <label htmlFor="eventFilter">Event:</label>
//           <select
//             id="eventFilter"
//             value={selectedEvent}
//             onChange={(e) => setSelectedEvent(e.target.value)}
//           >
//             {eventOptions.map((opt, idx) => (
//               <option key={idx} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="filterItem">
//           <label htmlFor="yearFilter">Year:</label>
//           <select
//             id="yearFilter"
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           >
//             {yearOptions.map((opt, idx) => (
//               <option key={idx} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <Gallery photos={galleryItems} onClick={openLightbox} />

//       {/* Lightbox Modal with Carousel */}
//       <ModalGateway>
//         {viewerIsOpen && activeDirectory && (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={activeDirectory.photos.map((photo) => ({
//                 ...photo,
//                 caption: photo.alt,
//               }))}
//             />
//           </Modal>
//         )}
//       </ModalGateway>

//       {/* Styled-JSX for component-specific styles */}
//       <style jsx>{`
//         .filterBar {
//           display: flex;
//           justify-content: center;
//           margin-bottom: 20px;
//           flex-wrap: wrap;
//         }
//         .filterItem {
//           margin: 0 10px;
//           display: flex;
//           align-items: center;
//         }
//         .filterItem label {
//           margin-right: 5px;
//         }
//         @media (max-width: 768px) {
//           .filterBar {
//             flex-direction: column;
//             align-items: center;
//           }
//           .filterItem {
//             margin: 5px 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const HomePage = () => {
//   return (
//     <div className="container">
//       <h1 className="title">School Photo Gallery</h1>
//       <GalleryComponent />

//       {/* Global styles for this page */}
//       <style jsx>{`
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//         }
//         .title {
//           text-align: center;
//           margin-bottom: 20px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
