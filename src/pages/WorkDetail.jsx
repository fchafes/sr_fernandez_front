import './WorkDetail.css'
import NavbarDetail from '../components/NavbarDetail'
import workData from '../data/workData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function WorkDetail() {
  const { url } = useParams();
  const work = workData.find(work => work.url === url);
  const paragraphs = Object.values(work.description);
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const [showGlitch2, setShowGlitch2] = useState(false);
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate('/');
    }, 400);
  };
  const handleGlitch2 = () => {
    setShowGlitch2(true);
    setTimeout(() => {
      setShowGlitch2(false);
      navigate('/');
    }, 400);
  };

  return (
    <>
      <NavbarDetail
      handleGlitch={handleGlitch}
      />
      {showGlitch && (
        <img src='src/assets/gif/glitch_03.gif' className='glitch'/>
      )}
      {showGlitch2 && (
        <img src='src/assets/gif/glitch_04.gif' className='glitch'/>
      )}

      <div className='work-container'>
        <div className='text-container'>
        <Link to="#" onClick={handleGlitch2}>Sr. Fernandez</Link>
            <h1>{work.title}</h1>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
        <div className='img-container'>
          {work.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkDetail;
