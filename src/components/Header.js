import Logo from '../images/logo.png'
import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <img src={Logo} alt="logo" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
      <h1>Your Vision, We Innovate & Automate </h1>
<p>
<h2>Enablers of cutting-edge technology solutions like 
  <br/>Blockchain, AI & Big data hadoop.</h2>

  <br />
  Whether you want to build an application from scratch or refactor and upgrade an existing code, 
  we radically improve your efficiency, productivity and cost effectiveness to deliver products and services in a smarted and scalable way.
  
</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
