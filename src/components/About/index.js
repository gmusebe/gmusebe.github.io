import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react';
import './index.scss'
import Python from '../../assets/images/python.svg'
import R from '../../assets/images/rstudio.svg'
import SQL from '../../assets/images/mysql.svg'
import PostgreSQL from '../../assets/images/postgresql.svg'
import d3 from '../../assets/images/d3-js.svg'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass] = useState('text-animate')

  return (

    <>
      <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
          />
        </h1>
        <p>
          I am self-driven, contemplative coder in data analytics. Having a Bachelors Honours in Actuarial Science gives me the perfect base for analyzing and interprating data into summarize beneficial for conclusive and apt decision making.
        </p>
        <p>
          Consistently rewarded for success in planning and operational improvements in streamlining business process and conversion of the same into system processes.
        </p>
        <p>
          I am confident, naturally curious, and ever working to be productive and offer obligatory value, consistently so, solving one task efficiently per time.
          I am a family person, I love mountain climbing and growth oriented.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
          <img width="100px" src={Python} alt="logo" />
          </div>
          <div className='face2'>
          <img width="100px" src={R} alt="logo" />
          </div>
          <div className='face3'>
          <img width="100px" src={SQL} alt="logo" />
          </div>
          <div className='face4'>
          <img width="100px" src={PostgreSQL} alt="logo" />
          </div>
          <div className='face6'>
          <img width="100px" src={d3} alt="logo" />
          </div>
        </div>
      </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About