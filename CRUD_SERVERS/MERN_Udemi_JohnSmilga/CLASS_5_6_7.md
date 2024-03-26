https://downloadlynet.ir/2022/17/64588/01/mern-stack-course-mongodb-express-react-and-nodejs
https://github.com/john-smilga/mern-jobify-v2


## VIDEO_1 ERROR PAGE
    pages/Error.jsx :
        import Wrapper from '../assets/wrappers/ErrorPage'
            <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Ohh! Page not found</h3>  </div> </Wrapper>

## VIDEO_1 REGISTER PAGE
    pages/Register.jsx :
    import { Logo } from '../components'
    import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className='form-label'>
            name
          </label>
          <input type="text" id="name" name="name" className="form-input"/>
        </div> </form> </Wrapper>
            
## VIDEO_1 LOGIN PAGE   
    components/FormRow.jsx:
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'> {labelText || name} </label>
        <input  type={type}  id={name}  name={name}
          className='form-input' defaultValue={defaultValue || ''}
          onChange={onChange} required /> </div>)

    components/index.js :
    export { default as Logo }   from './Logo';
    
    pages/Login.jsx :
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>login</h4>
        <FormRow type='email' name='email'/>
        <FormRow type='password' name='password'/>
        <button  type="summit" className="btn btn-block">  summit </button>
      </form>
      <Link to='/Register' >Register Page</Link>
    </Wrapper>

        
