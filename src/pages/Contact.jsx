import './Contact.css'
import NavbarDetail from '../components/NavbarDetail'
import { Link } from 'react-router-dom';

function Contact() {

  return (
    <>
      <NavbarDetail />
      <div className='contact-page-container'>
        <div className='contact-box'>
          <div className='link-box'>
            <a href='mailto:camilofndz@gmail.com'>camilofndz@gmail.com</a>
          </div>
          <div className='link-box'>
            <a href='tel:+33644006666'>+ 33 6 44 00 66 66</a>
          </div>
          <div className='link-box bottomless'>
            <a href='http://vimeo.com' target='_blank'>vimeo</a>
          </div>
          <div className='link-box bottomless'>
            <img src="src/assets/images/contact_smile.png" alt="smiley_face" className='contact-smile'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
