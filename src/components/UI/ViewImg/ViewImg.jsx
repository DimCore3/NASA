import { useState } from 'react';
import classes from './ViewImg.module.scss'

const ViewImg = ({url, hdurl ,alt}) => {
    const [isFullImg, setIsFullImg] = useState(false);

    const clickImg = () => {
        setIsFullImg(!isFullImg);
    }

    return ( 
        <div className="viewImg">
            <img src={url} onClick={clickImg} className="apodImg" alt={alt}/>
            {
                isFullImg && <img className={classes.fullImg} src={hdurl} onClick={clickImg} alt={alt}/>
            }
        </div>
    );
}
 
export default ViewImg;