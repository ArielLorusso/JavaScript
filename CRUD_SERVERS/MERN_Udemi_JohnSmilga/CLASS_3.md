https://downloadlynet.ir/2022/17/64588/01/mern-stack-course-mongodb-express-react-and-nodejs
https://github.com/john-smilga/mern-jobify-v2

## VIDEO_1 React Router
    React_Router (https://reactrouter.com/en/main) vERSION 6.4
    
## VIDEO_2 SETUP React Router
    App.jsx : `import {RouterProvider, createBrowserRouter} from 'react-router-dom';"
            const  router = createBrowserRouter ( [.... ] ) 
            export const App = () => { ... }`

## VIDEO_3 CREATE PAGES
    create   src/pages directory   &  set pages :
    AddJob.jsx
    Admin.jsx
    AllJobs.jsx
    DashboardLayout.jsx
    DeleteJob.jsx
    EditJob.jsx
    Error.jsx
    HomeLayout.jsx
    Landing.jsx
    Login.jsx
    Profile.jsx
    Register.jsx
    Stats.jsx :
        `const Stats = () => {          
        return <h1> Stats </h1>;  };      
        export default Stats            ` 

## VIDEO_4  SETUP INDEX
    pages/index.js :
        `export {default as Login}      from ./Login ;    
        export {default as Error}       from  ./Error ;  `
    App.jsx :
    `import {  HomeLayout,Landing,Register,Login,
              DashboardLayout,Error } from './pages';`

    `const  router = createBrowserRouter ([
    {   path : '/',
        element : <HomeLayout/>,     },`
## VIDEO_5 LINK COMPONENT 
    pages/Login.jsx :
    ` import { Link } from "react-router-dom"
    return (       "
        <div>       "
        <h1> Login Page </h1>       "
        <Link to="/register">Register Page</Link>   "
        </div>                  );`
## VIDEO_6 NESTED ROUTES
    App.jsx :
    `element : <HomeLayout/>,
    children : [
      {
        index:true,
        element: <Landing/>
      },`
    HomeLayout.jsx :
    `  return (
    <div>
      <nav>Nav-Bar</nav>
      <Outlet/>
    </div> ) `

## VIDEO_7 ERROR PAGE
    pages/Error.jsx :
    `   console.log(error);
        return(
            <div>
            <h1>Error Page</h1>
            <Link to ='/'> back home</Link>
            </div>
        ) `