import React, { useState, useEffect } from 'react';
import NEOMap from './NEOMap'
import DaysCarousel from './UI/DaysCarousel/DaysCarousel'
import '../styles/NearEarthObjects.scss'

const NearEarthObjects = ({ neoWs }) => {
    const nearEarthObjects = neoWs['near_earth_objects'];
    const [dateList, setDateList] = useState([]);
    const [choosedDate, setChoosedDate] = useState('');
    const [infoByChoosedDate, setInfoByChoosedDate] = useState([]);
    const [isLoadedDaysCarousel, setIsLoadedDaysCarousel] = useState(false);

    useEffect(() => {
        if (neoWs.hasOwnProperty('near_earth_objects')) {
            getInfo();
        }
    }, [neoWs])

    useEffect(() => {
        if (isLoadedDaysCarousel) {
            console.log(nearEarthObjects[choosedDate]);
            setInfoByChoosedDate(nearEarthObjects[choosedDate]);
        }
    }, [isLoadedDaysCarousel, choosedDate])

    const getInfo = () => {
        try {
            const resultDateList = [];
            console.log(nearEarthObjects);
            
            for (let day in nearEarthObjects) {
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
                    <DaysCarousel allDates={dateList} setIsLoadedDaysCarousel={setIsLoadedDaysCarousel} setChoosedDate={setChoosedDate} />
                    <div className='neoContent'>
                        {/* <h2>{neoWs.near_earth_objects[choosedDate].length}астеройдов</h2> */}
                        <NEOMap infoByChoosedDate={infoByChoosedDate}/>
                    </div>
                </div>

                : <h2 className='neoContent'>Загрузка данных...</h2>
            }

        </div>
    );
}

export default NearEarthObjects;