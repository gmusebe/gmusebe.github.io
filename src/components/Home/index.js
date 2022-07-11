import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')

    const nameArray = [' ','M', 'u', 's', 'e', 'b', 'e', ' ', 'I', 'v', 'a', 'n,']
    const jobArray = ['d', 'a', 't', 'a', ' ', 'a', 'n', 'a', 'l', 'y', 's', 't.' ]

    return (
      <>
        <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className='letterClass'>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={22} />
          </h1>
          <h2>SQL / Python / R / PowerBI</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />

        </div>
      </>
    );
}

export default Home