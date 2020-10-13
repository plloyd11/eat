require('dotenv').config()
const Airtable = require('airtable')
let base = new Airtable({ apiKey: process.env.AIRTABLE }).base('appiWuyq3AJaTH4Cv')

module.exports = () => {
    return new Promise((resolve, reject) => {
        let allCats = []
        base('cats')
            .select({
                view: 'Grid view',
            })
            .eachPage(
                function page(records, fetchNextPage) {
                    records.forEach((record) => {
                        allCats.push({
                            name: record.get('Name'),
                            age: record.get('Age'),
                            nicknames: record.get('Nicknames'),
                            photos: record.get('Photos'),
                        })
                    })
                    fetchNextPage()
                },
                function done(err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(allCats)
                    }
                }
            )
    })
}
