const dbLayer = require('../model/result');

let result = {}

result.getStoredResult = async () => {
    const response = await dbLayer.getStoredResult()
    return response
}

result.saveResult = async (resultToSave) => {
    const response = await dbLayer.saveResult(resultToSave)
    return response

}
module.exports = result