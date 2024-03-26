import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import {FormRow,Logo} from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>login</h4>
        <FormRow type='email' name='email'/>
        <FormRow type='password' name='password'/>
        <button  type="summit" className="btn btn-block">  summit </button>
        <button  type="Button" className="btn btn-block">  Explore the app </button>
        <p>Not yet a member ?</p>
        <Link to="/Register" className="member-btn"> Register </Link>
      </form>
    </Wrapper>
    );
    //  placeholder='neme@server.com'
    // placeholder='enter password'
}
export default Login
 