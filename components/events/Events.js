import Link from 'next/link';
import { useGetEventsQuery } from '../../redux/api/apiSlice';
import EventSingle from './EventSingle';

const Events = () => {
   const {data:events,isLoading,error,isError} = useGetEventsQuery();

   // decide to render
   let content = null;
   // loader
   if (isLoading && !isError) {
      content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
   }
 
   if(!isLoading && !isError && events?.length === 0){
      content = <h2>No Event Found</h2>
   }
 
   if(!isLoading && !isError && events.length > 0){
      content = events.map(event => <EventSingle key={event?._id} event={event} />)
   }

   return (
      <>
         <section className="event__area pt-115">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 text-center mb-60">
                        <span className="section__title-pre-2">Featured Courses</span>
                        <h3 className="section__title-2">Join our upcoming event</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     {content}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Events;