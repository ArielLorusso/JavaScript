import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';
import main from "../assets/images/main.svg"
//import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"


const StyledBtn = styled.button`
  font-size  : 1.5rem ;
  background : red ;
  color :    white ;
`; //css

const Landing = () => {
return(
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div>
        <h1>job <span> tracking</span> app  </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit nisi accusantium, deserunt pariatur quidem repellat laborum non nesciunt cupiditate maiores eum id nobis laudantium molestiae minima officia distinctio qui! 
        </p>
        <Link to='/Register' className='btn register-link'> Register</Link>
        <Link to='/Login' className='btn '> Login / Demo User</Link>
      </div>
    </div>
    <img src={main} alt="jobify" className='main' />
  </Wrapper>
  );
};

/* STYLE WITHOUT IMPORT

  const Wrapper = styled.div`
  background : red;
  h1{
    color : white;
  }
  .content{
    font-size: 20pt;
    background: blue;
    color: yellow;
  }`
*/

export default Landing
 