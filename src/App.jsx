import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage';
import Jobs from './pages/jobs'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage';
import JobDetailsPage,{jobLoader} from './pages/JobDetailsPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

// add job 
const addJob= async (newJob)=>{
  const res= await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'content-Type':'application/json',
    },
    body:JSON.stringify(newJob)
  });
}

//delete job

const deleteJob= async (id)=>{
  const res= await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
  });

}

//update job

const updateJob= async (job)=>{

  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(job)
  });


}

const App = () => {

  const router=createBrowserRouter([

    {
      path: "/",
      element: <MainLayout/>,
      children:[

        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/jobs",
          element:<Jobs/>
        },
        {
          path:"*",
          element:<NotFoundPage/>
        },
        {
          path:"jobs/:id",
          element:<JobDetailsPage deleteJob={deleteJob}/>,
          loader: jobLoader,
        },
        {
          path:"/add-job",
          element:<AddJobPage addJobSubmit={addJob}/>
        },
        {
          path:'/edit-job/:id',
          element: <EditJobPage updateJobSubmit={updateJob} />,
          loader:jobLoader,
        }

      ]

    },
  ]
   
  );

 

  return (
    <>

    <RouterProvider router={router}/>

      

    </>
  )
}

export default App