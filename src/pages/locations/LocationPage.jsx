
import { useEffect } from 'react';
import { pageData } from '../../location'
import './location.css'
function LocationPage({pagekey}) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = pageData[pagekey];
    if (!data) return null;
      return (
        <div className='location'>
            <div className='location-banner'>
    
            </div>
    
        </div>
      )
    
}

export default LocationPage