import React from 'react';
import image from './images/image.png'
import './App.css';
import twitter from './icons/Twitter Icon.svg'
import email from './icons/Mail.svg'
import linkedin from './icons/linkedin.svg'
import facebook from './icons/Facebook Icon.svg'
import instagram from './icons/Instagram Icon.png'
import github from './icons/GitHub Icon.svg'

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      <div style={{
        width: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <img src={ props.src } className='social-icon' alt='#' style={{
          width: '16px',
          height: '16px',
          margin: '0 8px 0 0',
        }} /> 
        {props.label}
      </div>
    </button>
  );
}

function App() {
  const handleClick = (buttonId) => {
    console.log('Button {buttonId} clicked!');
    // Perform any desired action here
  };

  const person = {
    name: "Laura Smith",
    job: "Frontend Developer",
    website: "laurasmith.website",
  };

  return (
    <div className='App'>
      <div className='App-border'>
        <div className='App-image'>
          <img src={image} alt='avt'></img>
        </div>
        {/*  */}
        <div className='App-info'>
          <p className='App-name'>{person.name}</p>
          <p className='App-job'> {person.job}</p>
          <p className='App-website'> {person.website} </p>
          <div className='Button'>
            <Button src={email} label='Email' onClick={handleClick(1)} style={{
              background: 'var(--white, #FFF)',
            }}>Email</Button>
            <Button src={linkedin} label='Linkedin' onClick={handleClick(2)} style={{
              background: '#5093E2', 
              color: 'white',
            }}>Linkedin</Button>
          </div>

          <div className='App-detail-info'>
            <p className='App-detail-h-tag'>About</p>
            <p className='App-detail-p-tag'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>

          <div className='App-detail-info'>
            <p className='App-detail-h-tag'>Interests</p>
            <p className='App-detail-p-tag'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>


        </div>



        {/*  */}
        <div className='social-icons'>
          <img src={twitter} className='social-icon' alt='twitter'/>
          <img src={facebook} className='social-icon' alt='facebook'/>
          <img src={instagram} className='social-icon' alt='instagram'/>
          <img src={github} className='social-icon' alt='github'/>
        </div>  
      </div>

      
    </div>

  );
}

export default App;
