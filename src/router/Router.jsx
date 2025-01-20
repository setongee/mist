import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import News from '../pages/newsroom/news';
import ViewNews from '../components/newsroom/view_news';
import People from '../pages/about/people';
import News_Events from '../pages/news_events/News_Events';
import News_view from '../pages/news_events/news_view';
import Connect from '../pages/connect/connect';
import Authy from '../admin/authy';
import Dashboard from '../admin/dashboard';
import { h1 } from 'motion/react-client';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>This is an Error Page</h1>,
      children : [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "connect",
          element: <Connect/>
        },
        {
          path : "about",
          children : [
            {
              path : "",
              element : <About/>
            },
            {
              path : "people/:id",
              element : <People/>
            },
          ]
        },
        {
          path: "newsroom",
          children : [
            {
              path : ":page",
              element : <News_Events/>
            },
            {
              path : "view/:id",
              element : <News_view/>
            }
          ]
        },
        {
          path : "admin",
          children : [
            {
              path : ":page",
              element : <Authy/>
            }
          ]
        }

      ]
    }
  ]);

  export default router;
  
