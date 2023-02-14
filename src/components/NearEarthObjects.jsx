import React, { useEffect } from 'react';
import DaysCarousel from './UI/DaysCarousel/DaysCarousel'
import '../styles/NearEarthObjects.scss'

const NearEarthObjects = ({neoWs}) => {

    useEffect(() => {
        getDates(neoWs.near_earth_objects);
    }, [neoWs])
    
    const getDates = (neoDays) => {
        for(let day in neoDays) {
            let date = new Date(day)
            console.log(date);
        }
    }

    return ( 
        <div className="nearEarthObjects">
            <DaysCarousel/>
            Near Earth Object Web Service
        </div>
     );
}
 
export default NearEarthObjects;