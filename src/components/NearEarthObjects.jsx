import React, { useState, useEffect } from 'react';
import DaysCarousel from './UI/DaysCarousel/DaysCarousel'
import '../styles/NearEarthObjects.scss'

const NearEarthObjects = ({neoWs}) => {
    const [dateList, setDateList] = useState([]);
    const [choosedDate, setChoosedDate] = useState('');

    useEffect(() => {
        console.log(choosedDate);
    }, [choosedDate])

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
                ? 
                <div> 
                    <DaysCarousel allDates={dateList} setChoosedDate={setChoosedDate}/>
                    <div className='neoContent'>
                        {/* <h2>{neoWs.near_earth_objects[choosedDate].length}астеройдов</h2> */}
                        <p>Here will be Neo graphic</p>
                    </div>
                </div>
                
                : <h2 className='neoContent'>Загрузка данных...</h2>
            }

        </div>
     );
}
 
export default NearEarthObjects;