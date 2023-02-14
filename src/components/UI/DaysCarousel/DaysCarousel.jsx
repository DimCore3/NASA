import classes from './DaysCarousel.module.scss'

const DaysCarousel = ({ allDates, enabledIndexDay, setEnabledIndexDay }) => {

    const months = [
        'Jun', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Nov', 'Dec'
    ]

    const getDateForSelecter = (day) => {
        console.log(day)
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
                            onClick={() => setEnabledIndexDay(index)}
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