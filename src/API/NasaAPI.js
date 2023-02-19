export default class NasaAPI {

    static async getAPOD(apiKey) {
        try {
            return fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey)
                .then(result => result.json());
                
        } catch (error) {
            console.error(error);   
        }
    };

    static async getNeoWs(apiKey) {
        try {
            return fetch('https://api.nasa.gov/neo/rest/v1/feed?api_key=' + apiKey)
                .then(result => result.json());

        } catch (error) {
            console.error(error);   
        }
    }
}