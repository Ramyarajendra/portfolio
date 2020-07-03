import React, { Fragment } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Education = () => {
    return (
        <Fragment>
        <div className = 'divider'></div>
        <div id='education'>
            <h1 className='white-text center'>Education</h1>
            <Timeline >
                <TimelineItem
                    key="001"
                    dateText="Aug 2019 – Present"
                    style={{ color: '#e86971' }}
                >
                    <h3 className='white-text'> Illinois Institute of Technology</h3>
                    <h5 className='white-text'>Masters in Computer Science</h5>
                    <p className='white-text'><b>GPA:</b>3.67</p>
                    <p className='white-text'>
                        <b>Relevant Coursework:</b> <i> Online Social Network Analysis, Advanced database Organization, Mobile Application Development , BigData Technologies,
                        Computer Networks , Machine Learning</i>
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="001"
                    dateText="Aug 2014 – May 2018"
                    style={{ color: '#e86971' }}
                >
                    <h3 className='white-text'>Visvesvaraya Technological University</h3>
                    <h5 className='white-text'>Bachelor of Engineering in Computer Science</h5>
                    <p className='white-text'><b>GPA:</b>3.8</p>
                    <p className='white-text'>
                        <b>Relevant Coursework:</b> <i> Data Structures and Algorithms, Object Oriented Programming, Data Mining,
                        Database Management System, Natural Language Processing, Operating Systems, Software Engineering, Compiler Design</i>
                    </p>
                </TimelineItem>
            </Timeline>
        </div>
        </Fragment>
    )
}

export default Education
