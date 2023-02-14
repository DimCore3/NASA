import React, { useState, useEffect } from 'react';
import DaysCarousel from './UI/DaysCarousel/DaysCarousel'
import '../styles/NearEarthObjects.scss'

const NearEarthObjects = ({neoWs}) => {
    const [enabledIndexDay, setEnabledIndexDay] = useState(0);
    const [dateList, setDateList] = useState([]);

    useEffect(() => {
        getInfo(neoWs.near_earth_objects);
    }, [neoWs])
    
    const getInfo = (neoDays) => {
        try {
            const resultDateList = [];
            console.log(neoDays);
            for(let day in neoDays) {
                resultDateList.push(day);
            }
            resultDateList.sort((a, b) => {
                a = new Date(a);
                b = new Date(b);
                return a - b
            });
            setDateList(resultDateList);

        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="nearEarthObjects">
            {dateList.length !== 0 
                ? <DaysCarousel allDates={dateList} enabledIndexDay={enabledIndexDay} setEnabledIndexDay={setEnabledIndexDay}/>
                : <h2 className='neoContent'>Загрузка данных...</h2>
            }
            <div className='neoContent'>
                Here will be Neo graphic
            </div>
        </div>
     );
}
 
export default NearEarthObjects;