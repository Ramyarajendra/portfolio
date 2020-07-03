import React, { Fragment } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


const Cert = () => {
    return (
        <Fragment>
        <div id='cert' className='container'>
        <h1 className='white-text center'>Certificates & Publication</h1>
        <Timeline >
                <TimelineItem
                    key="001"
                    dateText="Oct 2017"
                    style={{ color: '#e86971', 'textAlign': 'center' }}
                >
                    <p className='white-text' style={{'textAlign':'left'}}>
                    Published and awarded best research paper on effect of linguistic data on deep neural networks by Computer Society of India
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="001"
                    dateText="Apr 2018"
                    style={{ color: '#e86971', 'textAlign': 'center' }}
                >
                    <p className='white-text' style={{'textAlign':'left'}}>
                        Certified as Nano-degree holder in Natural Language Processing and deep neural networks by Udacity
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="001"
                    dateText="Apr 2020"
                    style={{ color: '#e86971', 'textAlign': 'center' }}
                >
                    <p className='white-text' style={{'textAlign':'left'}}>
                Certified in React web application development by LinkedIn Learning
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="001"
                    dateText="Dec 2017"
                    style={{ color: '#e86971' , 'textAlign': 'center' }}
                >
                    <p className='white-text' style={{'textAlign':'left'}}>
                    Awarded first place in coding and debugging challenge by Computer Society of India(CSI)
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="001"
                    dateText="Jan 2018"
                    style={{ color: '#e86971' , 'textAlign': 'center'}}
                >
                    <p className='white-text' style={{'textAlign':'left'}}>
                Certified by Udemy on successful completion of full-stack web developer course
                    </p>
                </TimelineItem>
        </Timeline>
        </div>
        </Fragment>
    )
}

export default Cert
