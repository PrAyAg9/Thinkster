import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath:'api',
  baseQuery:fetchBaseQuery({
    baseUrl:'https://eduker-server.onrender.com'
  }),
  tagTypes:[],
  keepUnusedDataFor:600,
  endpoints:(builder) => ({
    getCourses:builder.query({
      query:() => '/courses'
    }),
    getBlogs:builder.query({
      query:() => '/blog'
    }),
    getEvents:builder.query({
      query:() => '/events'
    }),
    getAwards: builder.query({
      query: () => '/awards',
    }),
    getTeams:builder.query({
      query:() => '/teams'
    }),
    // single blog
    getBlog:builder.query({
      query:(id) => `/blog/${id}`
    }),
    // single team 
    getTeam:builder.query({
      query:(id) => `/team/${id}`
    }),
    // single event
    getEvent:builder.query({
      query:(id) => `/event/${id}`
    }),
    // single course
    getCourse:builder.query({
      query:(id) => `/courseDetails/${id}`
    }),
    // category get
    getCategory:builder.query({
      query:(category) => `/category/${category}`
    }),
    getMyCourses:builder.query({
      query:(email) => `/myOrder/${email}`
    }),
  })
})

export const {useGetCoursesQuery,useGetBlogsQuery,useGetBlogQuery,useGetEventsQuery,useGetMyCoursesQuery,
useGetTeamsQuery,useGetTeamQuery,useGetEventQuery,useGetCourseQuery,useGetCategoryQuery, useGetAwardsQuery} = apiSlice;