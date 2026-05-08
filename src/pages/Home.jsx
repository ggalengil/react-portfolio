import { useState } from 'react';
import './Home.css';
import Wave from 'react-wavify';
import placeholder from '../assets/Portrait_Placeholder.png';
import ExpandableCard from '../components/ExpandableCard/ExpandableCard';

/* v1 */
function openCV(){
  window.open('/src/assets/CV_GuillermoGarciaAlenGil.pdf', '_blank');
}

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bodyHome'>
        <div className='introCard'>
          
          <img src={placeholder} alt="profile_picture"></img>
          <h1>Guillermo <br/>García-Alén Gil</h1>
          <p>Fullstack Developer</p>
        </div>
        <div className='clickable'>
          <div className='links'>
            <a href='https://linkedin.com/in/guillermogarciaalengil' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            <a href='https://github.com/ggalengil' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
          <button className='downloadCV' onClick={openCV}>Download CV</button>
        </div>
        <div className='bar'/>
        <ExpandableCard title="Experiencia">
          <p>pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </ExpandableCard>
        <ExpandableCard title="Selected Projects">
          <p>pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </ExpandableCard>
        <ExpandableCard title="Skills">
          <p>pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </ExpandableCard>
      </div>
      <div className='waveContainer'>
        <Wave 
          className ='wave'
          fill='#5f89e5'
          paused={false}
          options={{
            height: 270,
            amplitude: 15,
            speed: 0.25,
            points: 3
          }}
        />
        <Wave 
          className ='wave'
          fill='#5f00e5'
          paused={false}
          options={{
            height: 300,
            amplitude: 10,
            speed: 0.25,
            points: 3
          }}
        />
      </div>
      
    </>
  )
}

export default Home