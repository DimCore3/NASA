import '../styles/PictureOfDay.scss'
import ViewImg from './UI/ViewImg/ViewImg';

const PictureOfDay = ({ apod }) => {

    return (
        <div className="pictureOfDay">
            <div className='imgAndTitle'>
                <h2>{apod.title}</h2>
                <ViewImg url={apod.url} hdurl={apod.hdurl} alt={apod.media_type + " copyright: " + apod.copyright}/>
            </div>
            <div className="descriptionOfAPOD">
                <p>{apod.explanation}</p>
                <p>{apod.date}</p>
            </div>
        </div>
    );
}

export default PictureOfDay;