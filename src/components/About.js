import React from 'react'
import Typewriter from 'typewriter-effect';
import Typist from 'react-typist'


const About = () => {
    return (
        <div id='about' className='center margin-both' >
            <h1 className='center no-margin' style={{'color':'#C3073F', 'fontFamily':'cursive'}}>Ramya Rajendra</h1>
            <h5 className='center white-text'>
                <Typewriter
                    options={{
                        strings: ['Software Developer', 'Full Stack Web Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
            </h5>
            <div style={{'display':'inline-block','textAlign':'left','fontSize':'120%'}}>
                <ul>
                    <li ><a href="mailto:ramyarajendra2496@gmail.com" className='white-text lighten-2'>Email:       ramyarajendra2496@gmail.com</a></li>
                    <li className='white-text'>Phone:      +1 312-973-9340</li>
                </ul>
            </div>
                <div  style={{'fontSize':'120%','fontStyle':'italic'}}>
                    <Typist className='white-text' >
                        Hello!!<br/>
                        I am a Computer Science Graduate Student at Illinois Institute of Technology.
                        I am a full-stack web developer, also a machine learning enthusiast, and an inquisitive problem solver.
                        Seeking to work in a challenging environment which will help explore my potential in an effective way.
                    </Typist>
                </div>
                <div className='container'>
                    <ul className='center-align'>
                            <a href="https://github.com/Ramyarajendra" rel="noopener noreferrer" target = "_blank" className='icon yellow-text' ><i class="fa fa-github small" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/ramya-rajendra-049216194/" rel="noopener noreferrer" target = "_blank" className='icon yellow-text'><i class="fa fa-linkedin small" aria-hidden="true"></i></a>
                    </ul>
                </div>
        </div>
    )
}

export default About
