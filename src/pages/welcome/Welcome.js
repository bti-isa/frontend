import logo from '../../images/logo.png'
import right from '../../images/right.png'
import { Link } from 'react-scroll'
import './Welcome.css'

const WelcomePage = () =>{
    return(
        <div className='page'>
        <div className='main-container'>
            <section id='header'>
                <div className='menu'>
                    <div className='logo'>BTI   HOSPITAL</div>
                    <ul>
                        <li><Link to='/'>Already a donor?</Link></li>
                        <li><Link to='/'>Start donating now!</Link></li>
                    </ul>
                </div>
            </section>
            <section id='content'>
                <div className='wrapper'>
                    <div className='left'>
                        <div className='left-content'>
                            <h1>Welcome back!</h1>
                            <p>We are glad to see you again. Are you ready to save some lives together?</p>
                            <span><Link to='blood-banks' spy={true} smooth={true} offset={50} duration={500}></Link></span>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={right} />
                    </div>
                </div>
            </section>
        </div>
        <div className='blood-banks'>
            <section id='blood-banks'>
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </section>
        </div>
        </div>
    )
}

export default WelcomePage;