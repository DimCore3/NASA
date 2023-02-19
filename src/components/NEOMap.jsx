const NEOMap = ({infoByChoosedDate}) => {
    console.log(infoByChoosedDate);
    
    const sortByAbsoluteMagnitude = () => {
        let result = [];
        infoByChoosedDate.forEach(element => {
            result.push(element);
        });
        result.sort((a,b) => {
            return a.absolute_magnitude_h - b.absolute_magnitude_h 
        })
        console.log(infoByChoosedDate);
        console.log(result);
    };

    sortByAbsoluteMagnitude();

    return ( 
        <div className="canvasParentDiv">
            <canvas width={600+'px'} height={600+'px'}>
                Your browser doesn't support Canvas.
            </canvas>
        </div>
     );
}
 
export default NEOMap;