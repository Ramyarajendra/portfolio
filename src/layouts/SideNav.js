import React from 'react'
import pic from '../resources/Ramya.jpeg'
// import { Link } from 'react-router-dom'
import {NavHashLink as Link} from 'react-router-hash-link'
import Pdf from '../resources/Ramya Rajendra.pdf';


const SideNav = () => {
    return (
        <div>
            <ul className="sidenav sidenav-fixed" style={{'backgroundColor':'#59253A','width': '25%'}}>
                <li>
                <div className="user-view">
                        <div className="background black">
                        </div>
                        <a href="#user"><img className="" src={pic} style={{'height':'100%', 'width':'100%'}}/></a>
                </div>
            </li>
            <li><Link exact smooth to="#about" activeClassName="is-active" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className='white-text'>About</Link></li>
            <li><Link exact smooth to="#experience" activeClassName="is-active" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className='white-text'>Experience</Link></li>
            <li><Link exact to="#education" activeClassName='active' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="waves-effect white-text" >Education</Link></li>
            <li><Link exact to="#projects" activeClassName='active' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="waves-effect white-text" >Projects</Link></li>
            <li><Link exact to="#skills" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}  className="waves-effect white-text">Technical Skills</Link></li>
            <li><Link to="#cert" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}  className="waves-effect white-text">Certificates & Publications</Link></li>
            <li><Link to="#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}  className="waves-effect white-text">Contact</Link></li>
            <li><a href = {Pdf} className='white-text' rel="noopener noreferrer" target = "_blank">Resume</a></li>
            </ul>
        </div>
    )
}

export default SideNav
