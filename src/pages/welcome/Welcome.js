import right from '../../images/right.png'
import { Link } from 'react-scroll'
import './Welcome.css'
import UserHome from 'components/User/UserHome'

const WelcomePage = () =>{
    return(
        <div className='page'>
        <div className='main-container'>
            <section id='header'>
                <div className='menu'>
                    <div className='logo'>BTI   HOSPITAL</div>
                    <ul>
                        <li><a href='/auth'>Already a donor?</a></li>
                        <li><a href='/registration'>Start donating now!</a></li>
                    </ul>
                </div>
            </section>
            <section id='content'>
                <div className='wrapper'>
                    <div className='left'>
                        <div className='left-content'>
                            <h1>Welcome back!</h1>
                            <p>We are glad to see you again. Are you ready to save some lives together?</p>
                            <span><Link to='blood-banks' spy={true} smooth={true} offset={0} duration={500}></Link></span>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={right} alt="NE RADI SLIKA JBG"/>
                    </div>
                </div>
            </section>
        </div>
        <section id='blood-banks'>
            <div className='blood-banks'>
                <UserHome />
            </div>
        </section>
        </div>
    )
}

export default WelcomePage;