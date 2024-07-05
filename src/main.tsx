import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Public from './screens/public/Public.tsx'
import Private from './screens/private/Private.tsx';

import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/public/notFound.tsx";
import Loader from './components/loader/loader.tsx';

const Home= lazy(() =>
  wait(1300).then(() => import("./screens/public/Home.tsx"))
);
const AboutUs = lazy(() =>
  wait(1300).then(() => import("./screens/public/AboutUs.tsx"))
);
const Programs = lazy(() =>
  wait(1300).then(() => import("./screens/public/Programs.tsx"))
);
const Kudlit = lazy(() =>
  wait(1300).then(() => import('./screens/public/Kudlit.tsx'))
);
const Blog= lazy(() =>
  wait(1300).then(() => import('./screens/public/Blog/Blog.tsx'))
);
const WorkUs = lazy(() =>
  wait(1300).then(() => import("./screens/public/WorkUs.tsx"))
);



const SignIn = lazy(() =>
  wait(1300).then(() => import("./screens/private/Auth/SignIn.tsx"))
);



const Home2= lazy(() =>
  wait(1300).then(() => import("./screens/private/Home.tsx"))
);
const AboutUs2 = lazy(() =>
  wait(1300).then(() => import("./screens/private/AboutUs.tsx"))
);
const Programs2 = lazy(() =>
  wait(1300).then(() => import("./screens/private/Programs.tsx"))
);
const Kudlit2 = lazy(() =>
  wait(1300).then(() => import('./screens/private/Kudlit.tsx'))
);
const Blog2= lazy(() =>
  wait(1300).then(() => import('./screens/private/Blog/Blog.tsx'))
);
const WorkUs2 = lazy(() =>
  wait(1300).then(() => import("./screens/private/WorkUs.tsx"))
);
const CreatActivity = lazy(() =>
  wait(1300).then(() => import("./screens/private/Blog/CreatActivities.tsx"))
);
const EditActivity = lazy(() =>
  wait(1300).then(() => import("./screens/private/Blog/EditActivities.tsx"))
);


import ProtectedRoute from './JWT/ProtectedRoute.tsx';



const router = createBrowserRouter([
  {
    path: "/admin",
    element: <>
    <Suspense fallback={<Loader />}>
      <SignIn/>
    </Suspense>
  </>,
  },
  {
    path: "/editable",
    element:
    
    <ProtectedRoute>
    <Private/>
    </ProtectedRoute>
    ,
    children: [
      {
        path: "/editable", 
        element: <Navigate to="/editable/home" />, 
      },
      {
        path: "/editable/home",
        element: <>
        <Suspense fallback={<Loader />}>
          <Home2 />
        </Suspense>
      </>,
      },
      
      {
        path: "/editable/about",
        element: <>
        <Suspense fallback={<Loader />}>
          <AboutUs2/>
        </Suspense>
      </>,
      },
      {
        path: "/editable/programs",
        element: <>
        <Suspense fallback={<Loader />}>
          <Programs2/>
        </Suspense>
      </>,
      },
      
      {
        path: "/editable/work-with-us",
        element: <>
        <Suspense fallback={<Loader />}>
          <WorkUs2/>
        </Suspense>
      </>,
      },
      {
        path: "/editable/kudlit",
        element: <>
        <Suspense fallback={<Loader />}>
          <Kudlit2/>
        </Suspense>
      </>,
      },
      {
        path: "/editable/blog/:uid/",
        element: <>
        <Suspense fallback={<Loader />}>
          <Blog2/>
        </Suspense>
      </>,
      },
      {
        path: "/editable/edit-blog/:uid/",
        element: <>
        <Suspense fallback={<Loader />}>
          <EditActivity/>
        </Suspense>
      </>,
      },
      {
        path: "/editable/create-blog/",
        element: <>
        <Suspense fallback={<Loader />}>
          <CreatActivity/>
        </Suspense>
      </>,
      },

    ]
   
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Public />,
    
    children: [
      {
        path: "/", 
        element: <Navigate to="/home" />, 
      },
      
      {
        path: "/home",
        element: <>
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </>,
      },
      
      {
        path: "/about",
        element: <>
        <Suspense fallback={<Loader />}>
          <AboutUs/>
        </Suspense>
      </>,
      },
      {
        path: "/programs",
        element: <>
        <Suspense fallback={<Loader />}>
          <Programs/>
        </Suspense>
      </>,
      },
      
      {
        path: "/work-with-us",
        element: <>
        <Suspense fallback={<Loader />}>
          <WorkUs/>
        </Suspense>
      </>,
      },
      {
        path: "/kudlit",
        element: <>
        <Suspense fallback={<Loader />}>
          <Kudlit/>
        </Suspense>
      </>,
      },
      {
        path: "/blog/:uid/",
        element: <>
        <Suspense fallback={<Loader />}>
          <Blog/>
        </Suspense>
      </>,
      },



      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
