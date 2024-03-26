import { Link } from "react-router-dom"
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className='form-label'>
            name
          </label>
          <input type="text" id="name" name="name" className="form-input"
          defaultValue="" placeholder="Your Name" required/>
        </div>
        <button  type="summit" className="btn btn-block">  summit </button>
        <p>Allredy a member ?</p>
        <Link to="/login" className="member-btn"> Login </Link>
      </form>
    </Wrapper>
  );
}
export default Register