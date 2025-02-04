import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/viewAllJobs'



const HomePage = () => {
  return (
    <>

      <Hero title='Become a React Dev' subtitle="Find the React job that fits your skills and needs" />
      <Homecard />
      <JobListing isHome={true}/>
      <ViewAllJobs />

    </>
  )
}

export default HomePage