import './Home.css'
import CyberBackground from '../../components/CyberBackground';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleDown } from "react-icons/fa6";


export default function Home() {
    return (
        <div className="home-section">
            <CyberBackground />
            <div className="home-container">
                <div className="home-info">
                    <h1>Olá, seja bem-vindo!</h1>
                    <h1>Sou <strong>Wendson Magalhães</strong></h1>
                    <h2> <Typewriter
                        words={[
                            'Desenvolvedor Web Full Stack',
                            'Designer UI/UX',
                            'Desenvolvedor React',
                            'Desenvolvedor NodeJS',
                            'Desenvolvedor React Native'

                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    /></h2>
                </div>

                <button className="btn-contact"
                    onClick={() => {
                        const section = document.getElementById('contact-section');
                        section?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'center',
                        });
                    }}>
                    Contate-me
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


            </div>

            <div className="arrow-down"><FaAngleDown />
            </div>


        </div>
    );
}
