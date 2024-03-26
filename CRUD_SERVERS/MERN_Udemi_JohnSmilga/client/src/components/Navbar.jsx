import Wrapper from '../assets/wrappers/Navbar';
//import {FaHome} from 'react-icons/fa';
import {FaAlignLeft} from 'react-icons/fa';
import Logo from './Logo';
//<FaHome/>
import {useDashboardContext} from '../pages/DashboardLayout';
//onClick={toggleSidebar}
const Navbar = () => {
    return(
        //const {toggleSidebar} = useDashboardContext();
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
        </Wrapper>
    );
};

export default Navbar;