import PropTypes from 'prop-types'
import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;Copyright @ 2021 : <a href="https://techrd.io">Techrd</a>. Built with: <a href="https://techrd.io">Tech.Research.Development</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
