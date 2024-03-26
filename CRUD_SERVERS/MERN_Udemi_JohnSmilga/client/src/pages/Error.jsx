import { Link, useRouteError } from "react-router-dom"
import Wrapper from '../assets/wrappers/ErrorPage'
import img  from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return(
    <Wrapper>
    <div>
      <img src={img} alt="not found" />
      <h3>Ohh! Page not found</h3>
      <p> We cant semm to find the page you are looking for 
        you can use the link below to return to the home page</p>
      <Link to ='/dashboard'> Back Home </Link>
    </div>
    </Wrapper>
  ) 
}
export default Error
 