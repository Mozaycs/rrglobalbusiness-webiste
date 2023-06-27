import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [msg, setMsg] = useState("");
    const sendEmail = e => {
        e.preventDefault();
        emailjs.init('user_MdnPdTazZJFassW1vZ7hn');
        emailjs.sendForm('service_3n6pkei', 'template_6v3gtzj', e.target, 'user_MdnPdTazZJFassW1vZ7hn')
        .then((result) => {
            console.log(result.text);
            setMsg("Message sent successfully!")
        }, (error) => {
            console.log(error.text);
            setMsg("Something went wrong!")
        });
        e.target.reset();
    }
  return (
    <>
      <h2 className="major">Contact</h2>
      <form method="post" action="#" onSubmit={sendEmail} >
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
        {msg && (
            <ul className="actions msg">
                <li>{msg}</li>
            </ul>
        )}
      </form>
      <h2 className="major">Address</h2>
      <p className="address">
        <div className="address-column">
          <span className="address-heading">RR Global Business</span>
          Nivy Tower, Svatoplukova 1, <br />
          82109 Bratislava, Slovakia <br />
          Reg.No.: 45853690
        </div>
        {/* <div className="address-column">
          <span className="address-heading">TechRD SOLUTIONS PRIVATE LIMITED</span>
          No.30, 1st Main, R.M.S. Colony, <br />
          560049 Bangalore, India <br />
          Reg.No.: 142252
        </div>
        <div className="address-column">
          <span className="address-heading">KERN.ADLER SOFTWARE SRL</span>
          Chaussée d’Alsemberg 842, <br />
          1180 Uccle, Belgium <br />
          Reg.No.: 0760608870
        </div> */}
      </p>
      {/* <ul className="icons">
        <li>
          <a href="https://github.com/TechResearchDevelopment" className="icon fa-github" target="_blank">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul> */}
    </>
  )
}

export default Contact
