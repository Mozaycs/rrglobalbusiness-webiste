import Contact from './Contact'
import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import Work from './Work'

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
        We are a passionate team developing innovation and complex solutions. 
        Being a technology pioneer responsible for ensuring a company is making great products for their customers. 
        Also the driver behind the commercialization of technology. 
        Develop coherent platforms backed up with useful features on a variety of digital channels. 
        Importance in these companies is rising due to the fact that users are demanding increasingly sophisticated products. 
        A business intuitive and contribute cost-effective solutions with creative architectures.By the
          way, check out my <a href="#work">awesome work</a>.
        </p>
        <p>
       <li> Technical Product Development</li>

        <li>Leadership and Team building</li>

        <li>Client outreach </li>

        <li>Product development </li>

        <li>Research and development </li>


        <li>Customer engagement </li>


        <li>ICT and Business relation for product development </li>


        <li>Startup mentor </li>


        <li>MVP builder </li>


        <li>Lifecycle management </li>


        <li>Technical architecture </li>


        <li>It service management and delivery </li>


        <li>Agile methodologies </li>


        <li>Stake holder management </li>


        <li>Risk management </li>


        <li>Software development lifecycle </li>

        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        <Work />
        {/* <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
          eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
          nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
          mauris nec lorem luctus ultrices.
        </p> */}
   
        {close}
      </article>
      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>
      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <Contact />
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
