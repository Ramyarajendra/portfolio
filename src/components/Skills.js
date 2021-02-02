import React, { Fragment } from 'react'
import SkillBar from 'react-skillbars';

const Skills = () => {
    const skills = [
        {type: "Javascript", level: 95},
        {type: "Python", level: 90},
        {type: "Java", level: 85},
        {type: "C++", level: 75},
        {type: "C", level: 75},
        {type: "C#", level: 55},
      ];
      const webskills = [
        {type: "ReactJS", level: 95},
        {type: "NodeJS", level: 90},
        {type: "VueJS", level: 90},
        {type: "ExpressJS", level: 75}
      ];
      const others = [
        {type: "MongoDB", level: 95},
        {type: "MySQL", level: 90},
        {type: "Git", level: 95},
        {type: "Jira", level: 80}
      ];
      const color = {
          bar: '#e86971',
          title: {
              text:'white',
              background: '#ad1457'
          }
      }
    return (
        <Fragment>
        <div className = 'divider'></div>
        <div id='skills' className='margin-both'>
            <h1 className='center white-text'>Technical Skills</h1>
            <div className='section'>
                <h5 className='white-text'> Programming Languages</h5>
                <SkillBar skills={skills} colors={color}/>
            </div>
            <div className='row'>
                <div className="col s12 l6">
                    <h5 className='white-text'>Web Technologies / Frameworks</h5>
                    <SkillBar skills={webskills} colors={color}/>
                </div>
                <div className="col s12 l6">
                    <h5 className='white-text'>Databases & others</h5>
                    <SkillBar skills={others} colors={color}/>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Skills
