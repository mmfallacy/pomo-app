const API_KEY = process.env.REACT_APP_GOOGLE_VISION_API_CREDENTIALS

/**
 * Query Cloud Vision API using this function
 * @param {Object} source
 */
// export default async function query(source){
//     const Client = new ImageAnnotatorClient({credentials:API_KEY, project_id:"macro-campaign-296712"})

//     const [result] = await Client.documentTextDetection(source)
    
//     console.log(result.fullTextAnnotation)
//     return result.fullTextAnnotation
// }

export default async function query(dataURL){
    let request = JSON.stringify({
        requests: [
            {
                image: {
                    content:dataURL.split(',')[1]
                },
                features: [
                    {type:"TEXT_DETECTION", maxResults:'5'}
                ]
            }
        ]
    })

    let response = await fetch("https://vision.googleapis.com/v1/images:annotate?key=" + API_KEY, {
            method: "post",
            body: request,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }
    );

    if (response.ok)
        return response.json()
    else
        throw Error('Invalid response from Google Cloud API')
}