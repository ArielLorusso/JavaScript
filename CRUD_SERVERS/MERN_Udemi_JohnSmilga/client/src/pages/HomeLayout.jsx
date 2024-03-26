import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    // THIS WILL BE HEADDER ALL PAGES
    <div>
      <nav> NavBar</nav>
      <Outlet/>
    </div>
  );
};
export default HomeLayout
 