import { pageData } from '../../location'
import './location.css'
function LocationPage({pagekey}) {
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