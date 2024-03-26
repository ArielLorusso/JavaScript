https://downloadlynet.ir/2022/17/64588/01/mern-stack-course-mongodb-express-react-and-nodejs
https://github.com/john-smilga/mern-jobify-v2

## VIDEO_1 DASHBOARD STRUCTURE
    pages/DashboardLayout.jsx :
      import { BigSidebar, Navbar, SmallSidebar } from "../components"
      return ( <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div classname='dashboard-page'>
            <Outlet/>    </div></div></main></Wrapper>)

    components/BigSidebar.jsx :
      import Wrapper from '../assets/wrappers/BigSidebar'
      <Wrapper>    BigSidebar </Wrapper>

    components/SmallSidebar.jsx :
      import Wrapper from '../assets/wrappers/SmallSidebar'
      <Wrapper>    SmallSidebar </Wrapper>
      
    components/Navbar.jsx :
      import Wrapper from '../assets/wrappers/BigSidebar'
      <Wrapper>    Navbar </Wrapper>
      
    components/index.js :
      export { default as BigSidebar }   from './BigSidebar'
      export { default as SmallSidebar }   from './SmallSidebar'
      export { default as Navbar }   from './Navbar'

## VIDEO_2 DASHBOARD CSS

## VIDEO_3 DASHBOARD CONTEXT
  pages/DashboardLayout.ejx :
  import { useState } from "react"
  const user = {name:'jhon'}
  const [showSidebar,setShowSidebar] = useState(false) // React : useState
  const [isDarkTheme,setIsDarkTheme] = useState(false)
  
  const toggleDarkTheme = () => {
    console.log('toggle DarkTheme') // F12 debug
  }

## VIDEO_4 REACT ICONS
  https://react-icons.github.io/react-icons
  components/Navbar.ejx :
  import {FaHome} from 'react-icons/fa'
     <Wrapper>
            <FaHome/>   </Wrapper>
            
## VIDEO_4 REACT ICONS
  pages/DashboardLayout.ejx :
   <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' >
                    <FaAlignLeft/>
                </button>
                <div>
                    <Logo/>
                    <h4 className='logo-text'> dashboard </h4>
                </div>
                <div className='btn-container'>toggle/logout</div>
            </div>
