https://downloadlynet.ir/2022/17/64588/01/mern-stack-course-mongodb-express-react-and-nodejs
https://github.com/john-smilga/mern-jobify-v2

## VIDEO_1 STYLED COMPONENT  [CSS in JS ]
    pages/Landing.jsx :
    const StyledBtn = syled.button`
    font-size  : 1.5rem ;
  " background : red ;
    color :    white ; `
    const Landing = () => {
    return(
        <div>
        <h1>Landing</h1>
        <StyledBtn> StyledBtn </StyledBtn>
        </div>
        ) 
    }

## VIDEO_2 WRAPPER
  pages/Landing.jsx :
    import Wrapper from '../assets/wrappers/LandingPage';
    return(
      <Wrapper>
        <h1> Landing Page</h1>
        <div className='content'> some content </div>
      </Wrapper> )

    const Wrapper = styled.div`
    background : red;
    h1{
      color : white;
    }`//CSS


## VIDEO_3 LANDING PAGE
  pages/Landing.jsx : 
  import { Link } from "react-router-dom" // IMPORTANT React router <Link>
  import main from "../assets/images/main.svg";
  import logo from "../assets/images/logo.svg";
  <nav>
      <img src={logo} alt="jobify" />
  </nav>
  <h1>job <span> tracking</span> app  </h1>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit nisi accusantium, deserunt pariatur quidem repellat laborum non nesciunt cupiditate maiores eum id nobis laudantium molestiae minima officia distinctio qui! 
  </p>
  <Link to='/Register' className='btn register-link'> Register</Link>
  <Link to='/Login' className='btn '> Login / Demo User</Link>

## VIDEO_3 LANDING PAGE CSS 
  assets/wrappers/LandingPage.js :
  const Wrapper = styled.section`CSS`
  
## VIDEO_5 LOGO AS COMPONENT 
  component/Logo.jsx : 
                        const Logo = () => {
                          return(
                              <img src={logo} alt="jobify" className='logo' />
                          );  };
                        export default Logo;
                        
  component/index.js : export { default as Logo }  from './Logo';

  pages/HomeLayout.jsx: import Logo from '../components/Logo';
                          <nav>
                            <Logo />
                          </nav>

## VIDEO_6 LOGO AS COMPONENT 
  SVG
  https://www.figma.com/files/project/103678216/
  https://undraw.co/illustrations
  FAVICON
  https://favicon.io/favicon-generator/
  Text  J    Color #0dd  Background Color #FFF      Background  Rounded
  Font Allerta   Regular 400 Normal  Font Size 120
