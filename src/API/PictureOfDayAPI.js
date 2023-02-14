export default class PictureOfDayAPI {

    static async getAPOD(apiKey) {
        try {
            return fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey)
                .then(result => result.json());
        } catch (error) {
            console.error(error);   
        }
    }
}