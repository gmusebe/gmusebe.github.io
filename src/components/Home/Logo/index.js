import './index.scss'
import LogoS from '../../../assets/images/LogoS_1.png' 
// import { useRef } from 'react'

const Logo = () => {

  // const bgRef = useRef();
  // const outlineLogoRef = useRef();
  // const solidLogoRef = useRef();

  return (
    <div className='logo-container'>
      <img className='solid-logo' src={LogoS} alt ='S'/>
    </div>
  )
}

export default Logo