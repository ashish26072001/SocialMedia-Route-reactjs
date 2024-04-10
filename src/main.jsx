import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList from './component/PostList.jsx'
import CreatePost from './component/CreatePost.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <PostList /> },
    {
      path: "/create-post",
      element: <CreatePost />,
    },
  ],
},])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
//in this we don't do the loader and action topic read in 14hour 30 mint in video