import './WorkDetail.css'
import NavbarDetail from '../components/NavbarDetail'
import { useParams } from 'react-router-dom';
import workData from '../data/workData';
import { Link } from 'react-router-dom';

function WorkDetail() {
  const { url } = useParams();
  const work = workData.find(work => work.url === url);
  const paragraphs = Object.values(work.description);

  return (
    <>
      <NavbarDetail />
      <div className='work-container'>
        <div className='text-container'>
        <Link to="/">Sr. Fernandez</Link>
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
