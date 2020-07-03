import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')

      }

    const onSubmit = e => {
        e.preventDefault()
        const templateParams = {
            from_email: email,
            from_name: name,
            to_name: 'Ramya',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_oBhOvVvc',
             templateParams,
            'user_sdsIQd1wU1Okos9OY9nVE'
        )
        resetForm()
    }
    return (
        <div id='contact' className='container'>
            <h1 className='white-text center'>Contact Me</h1>
            <div className='row'>
                <div className='col s6'>
                    <form onSubmit={onSubmit}>
                    <div className="input-field">
                        <input id="first_name" name='name' value={name} onChange={e => { setName(e.target.value)}} type="text" className="validate white-text" required/>
                        <label htmlFor="first_name">Name</label>
                    </div>
                    <div className="input-field">
                        <input id="email" name='email' value={email} onChange={e => { setEmail(e.target.value)}} type="email" className="validate white-text" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input id="subject" name='subject' value={subject} onChange={e => { setSubject(e.target.value)}} type="text" className="validate white-text" required/>
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="input-field">
                        <textarea id="message" name='message' value={message} onChange={e => { setMessage(e.target.value)}} className="materialize-textarea white-text" required/>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div>
                        <button className="btn btn-small " type='submit'>Submit</button>
                    </div>
                    </form>
                </div>
                <div className="right">
                <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="ramya-rajendra-049216194"><a class="LI-simple-link" href='https://www.linkedin.com/in/ramya-rajendra-049216194?trk=profile-badge'>Ramya Rajendra</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
