

import HomePage from '../routes/home/home';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// Import ListPage as a named export
import List from '../routes/list/list';
import Layout from '../routes/layout/layout';
import SinglePage from '../routes/singlePage/singlePage';
import Profile from '../routes/profile/profile';
import Login from '../routes/login/login';
import Register from '../routes/register/register';
import NewPostPage from '../routes/NewPostPage/NewPostPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
       children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<List/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/login",
          element:<Login/>
        },

        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/new",
          element:<NewPostPage />
        }


       ]
      }
  ]);

  return (
    
    <RouterProvider router={router}/>
     
   
  );
}

export default App;
