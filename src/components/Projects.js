import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Projects = () => {
    return (
        <Fragment>
        <div className = 'divider'></div>
        <div id='projects'>
            <h1 className='center white-text'>
            Projects</h1>
            <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#99004C', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="May 2020"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Contact Keeper </h4>
                <h5 className="vertical-timeline-element-subtitle">Full stack MERN web application</h5>
                <ul>
                    ➢ Makes use of Context API ,RESTful API for CRUD operations, React Hooks for state management ,mongo Atlas for cloud storage of data
                    and Json Web Token for token authentication </ul>
                <a href=' https://fast-atoll-12985.herokuapp.com/' rel="noopener noreferrer" target = "_blank" className='btn btn-small pink lighten-1'> View Demo</a>
                <a href='https://github.com/Ramyarajendra/ContactKeeper' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C3073F', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Sep 2019 - Oct 2019"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Classifying followers of most influential users on twitter</h4>
                <ul>
                ➢ Programmed using python, uses machine learning algorithms like logistic regression, random forest and decision trees to classify users.
                ➢ Analysis on celebrity-centric social network accounts to classify the users as bots and non bots.
                    </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#99004C', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Apr 2020"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Github Finder </h4>
                <h5 className="vertical-timeline-element-subtitle">React web app</h5>
                <ul>
                ➢ React Based Web application to search and view Github user’s profile
                ➢ Makes use of React Hooks, Context API and Github’s search API </ul>
                <a href='https://githubfinder249612.netlify.app/' rel="noopener noreferrer" target = "_blank" className='btn btn-small pink lighten-1'> View Demo</a>
                <a href='https://github.com/Ramyarajendra/GithubFinder' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C3073F', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="June 2020"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">IT Logger</h4>
                <h5 className="vertical-timeline-element-subtitle">React Application</h5>
                <ul>
                    ➢ Used to maintain system logs for users
                    ➢ Makes use of JSON server as mock backend and Redux for state management
                     </ul>
                <a href='https://github.com/Ramyarajendra/ITLogger' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#99004C', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Feb 2020"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">My Blog</h4>
                <h5 className="vertical-timeline-element-subtitle">Full stack web application</h5>
                <ul>
                ➢ Full stack web application which enables to view, upvote and comment on articles and also navigate to other related articles
                ➢ Makes use of MongoDB, Express Server, React Hooks, React Router </ul>
                <a href='https://github.com/Ramyarajendra/MyBlog-FullstackApp' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C3073F', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Aug 2019 - Sep 2019"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Stock Watch</h4>
                <h5 className="vertical-timeline-element-subtitle">Mobile app for Stock Market</h5>
                <ul>
                ➢ A mobile app created using Android studio which displays stock rates for popular companies by fetching data from Stock API
                ➢ Provides search, insert ,delete functionalities for company stocks </ul>
                <a href='https://github.com/Ramyarajendra/StockWatch' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#99004C', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Jan 2018 - Mar 2018"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Context Based Language Translator</h4>
                <h5 className="vertical-timeline-element-subtitle">Web application</h5>
                <ul>
                ➢ Web application which translates source to destination language based on context of sentence. Accomplished using deep neural net-
            works(bi-directional recurrent neural network model)
            ➢ Libraries used: keras, tensorflow, matplotlib ,numpy </ul>
                <a href='https://github.com/Ramyarajendra/machinetranslator' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C3073F', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Oct 2019"
                iconStyle={{ background: '#59253A', color: '#fff' }}
                style={{'fontFamily':'Courier New'}}
            >
                <h4 className="vertical-timeline-element-title">Multi Notepad</h4>
                <h5 className="vertical-timeline-element-subtitle">Mobile application</h5>
                <ul>
                ➢ Mobile app created using android studio. Allows creation and maintenance of multiple notes. Provides creation, modification, deletion and
            search functionalities</ul>
                <a href='https://github.com/Ramyarajendra/MultiNotepad' rel="noopener noreferrer" target = "_blank" className='btn btn-small right pink lighten-1'> Source Code</a>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
        </Fragment>
    )
}

export default Projects
