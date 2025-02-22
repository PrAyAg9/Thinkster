import { useState } from 'react';
import { useGetBlogsQuery } from '../../redux/api/apiSlice';
import BlogPagination from '../common/BlogPagination';
import BlogRightSide from './BlogRightSide';
import SingleBlog from './SingleBlog';

const BlogArea = () => {
   const {data:blogs,isLoading,isError} = useGetBlogsQuery();
   // current page
   const [currentPage,setCurrentPage] = useState(1);
   // per page
   const [blogPerPage,setBlogPerPage] = useState(2);
   // index of last page
   const indexOfLastPage = currentPage * blogPerPage;
   // index of first page
   const indexOfFirstPage = indexOfLastPage - blogPerPage;
   // current blogs
   const currentBlogs = blogs?.slice(indexOfFirstPage,indexOfLastPage);
   // paginate
   const paginate = (number) => {
      setCurrentPage(number)
   }
   // loader
   if (isLoading && !isError) {
      return <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
   </div>
    }
   return (
      <>
         <section className="blog__area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper pr-20">
                        {
                           currentBlogs?.map(blog => <SingleBlog key={blog?._id} blog={blog} />)
                        }
                        <div className="basic-pagination">
                          <BlogPagination blogPerPage={blogPerPage} toltalBlogs={blogs.length} 
                          currentPage={currentPage} paginate={paginate} />
                        </div>
                     </div>
                  </div>
                  <BlogRightSide blogs={blogs} />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogArea;