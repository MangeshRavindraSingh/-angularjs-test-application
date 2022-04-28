const collection = require('../utilities/connection');
let result = {}

result.getStoredResult = () => {
    return collection.resultCollection().then(policyColl => {
        return policyColl.find()
            .then(data => {
                if (data.length !== 0) {
                    return data
                }
                else {
                    throw new Error('No result found for this Id')
                }
            })
    })
}

result.saveResult = (result) => {
    return collection.resultCollection().then(async (resultColl) => {
        await resultColl.deleteMany();
        const resultToSave = new resultColl(result);
        const results = await resultToSave.save();
        return results
    })
}

module.exports = result