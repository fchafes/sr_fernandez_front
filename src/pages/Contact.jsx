import './Contact.css'
import NavbarDetail from '../components/NavbarDetail'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate('/');
    }, 400);
  };

  return (
    <>
      <NavbarDetail
      handleGlitch={handleGlitch}
      />
      {showGlitch && (
        <img src='src/assets/gif/glitch_02.gif' className='glitch'/>
      )}

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