import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <Fragment>
        <div id='experience' >
        <h1 className='white-text center'>
            Experience
        </h1>
        </div>
        <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#99004C', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Oct 2018-May 2019"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Software Developer </h4>
                <h5 className="vertical-timeline-element-subtitle">ManufactOn</h5>
                <li>Full Stack web development /mobile application development</li>
                <li> Contributed towards designing and developing web application using vue.js, node.js, bootstrap/buefy</li>
                <li>Actively involved in refactoring and modifying code for android app development</li>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C3073F', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Oct 2017-Jan 2018"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Software Developer Intern</h4>
                <h5 className="vertical-timeline-element-subtitle">GE Digital</h5>
                <li>Web design and development</li>
                <li> Closely involved in designing & developing web application using HTML5,CSS6, Javascript</li>
                <li>Contributed towards maintaining and modifying database using mongodb</li>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#99004C', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Jan 2019-Apr 2019"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Research Intern</h4>
                <h5 className="vertical-timeline-element-subtitle">Indian Institute of Science</h5>
                <li>Pattern Recognition and Machine learning</li>
                <li> Involved in optimizing and implementing pattern recognition techniques on machine learning models to analyze and predict data.</li>
                <li> Assisted in paper work on improvised Clustering techniques of k-means algorithm</li>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </Fragment>
    )
}

export default Experience
