import { useEffect, useState } from 'react';
import classes from './DaysCarousel.module.scss'

const DaysCarousel = ({ allDates, setIsLoadedDaysCarousel, setChoosedDate }) => {
    const [enabledIndexDay, setEnabledIndexDay] = useState(0);
    const months = [
        'Jun', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Nov', 'Dec'
    ]

    useEffect(()=> {
        setChoosedDate(allDates[enabledIndexDay]);
        setIsLoadedDaysCarousel(true);
    })

    const getDateForSelecter = (day) => {
        let date = new Date(day);
        return date.getDate() + ' ' + months[date.getMonth()];
    }

    return (
        <div className={classes.neoDaysCarousel}>
            {allDates.map((day, index) =>
                <div key={index} className={classes.dayOfCarousel}>
                    {
                        <div
                            className={enabledIndexDay === index ? classes.enabledDay : classes.disabledDay}
                            onClick={() => {
                                setEnabledIndexDay(index);
                                setChoosedDate(day);
                            }}
                        >
                            {getDateForSelecter(day)}
                        </div>
                    }
                </div>
            )}
        </div>
    );
}

export default DaysCarousel;