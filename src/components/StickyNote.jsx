import './StickyNote.css';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function StickyNote( { startPoint, endPoint, data } ) {
  const [effectActivated, setEffectActivated] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  if (inView && !effectActivated) {
    setEffectActivated(true);
  }

  return (
    <>
      <div ref={ref} className={`sticky-note ${startPoint} ${effectActivated ? endPoint : ''}`} >
              <p>{data}</p>
            </div>
    </>
  )
}

export default StickyNote;
