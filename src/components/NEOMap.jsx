import MyCanvas from "./MyCanvas";

const NEOMap = ({infoByChoosedDate}) => {

    const sortByAbsoluteMagnitude = () => {
        let result = [];
        infoByChoosedDate.forEach(element => {
            result.push(element);
        });
        result.sort((a,b) => {
            return a.absolute_magnitude_h - b.absolute_magnitude_h 
        })
    };

    sortByAbsoluteMagnitude();

    return ( 
        <div className="canvasParentDiv">
            <MyCanvas/>
        </div>
     );
}
 
export default NEOMap;