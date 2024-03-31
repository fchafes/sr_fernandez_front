import './Contact.css'
import NavbarDetail from '../components/NavbarDetail'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MadeIn from '../components/MadeIn';

function Contact() {
  const bucket = "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket";
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate('/');
    }, 400);
  };
  useEffect(() => {
    const preloadGlitch_02 = new Image();
    preloadGlitch_02.src = `${bucket}/gif/glitch_02.gif`;
    return () => {};
  }, []);

  return (
    <>
      <NavbarDetail
      handleGlitch={handleGlitch}
      />
      <MadeIn/>
      {showGlitch && (
        <img src={`${bucket}/gif/glitch_02.gif`} className='glitch'/>
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
            <a href='https://vimeo.com/user22695304' target='_blank'>vimeo</a>
          </div>
          <div className='link-box bottomless'>
            <img src={`${bucket}/images/contact_smile.png`} alt="smiley_face" className='contact-smile'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
