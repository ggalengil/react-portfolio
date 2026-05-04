import { useState } from 'react'
import Wave from 'react-wavify'
import placeholder from "../assets/Portrait_Placeholder.png"

/* V1 */
function openCV(){
  window.open('/src/assets/CV_ES_GuillermoGarciaAlenGil.pdf', '_blank');
}

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bodyHome">
        <div className="introCard">
          <img src={placeholder}></img>
          <h1>Guillermo García-Alén Gil</h1>
        </div>
        <h3>Fullstack Developer</h3>
        <div className="clickable">
          <div className="links">
            <a href="https://linkedin.com/in/guillermogarciaalengil">LinkedIn</a>
            <a href="https://github.com/ggalengil">Github</a>
          </div>
          <button className='downloadCV' onClick={openCV}>Download CV</button>
        </div>
      </div>
      <div className="waveContainer">
        <Wave 
          className ="wave"
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
          className ="wave"
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