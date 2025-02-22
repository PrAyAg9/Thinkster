import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'swiper/css/bundle';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { ToastContainer } from 'react-toastify';
// internal
import { coursesData } from '../../redux/features/coursesSlice';
import { store } from '../../redux/store';
import './index.scss';
import { blogData } from '../../redux/features/blogSlice';
import { eventData } from '../../redux/features/eventSlice';
import { teamData } from '../../redux/features/teamSlice';
import { categoryData } from '../../redux/features/categorySlice';
import { getTotal } from '../../redux/features/cartSlice';
import SEO from '../../components/seo';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(coursesData());
    store.dispatch(blogData());
    store.dispatch(eventData());
    store.dispatch(teamData());
    store.dispatch(categoryData());
    store.dispatch(getTotal());
  }, []);

  return (
    <React.Fragment>
      <SEO font="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
