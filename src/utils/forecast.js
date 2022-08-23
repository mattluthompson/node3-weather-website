const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=90de8e037e8e03f2b4ede07f023bec7e&query='+latitude+','+longitude+'&units=f'
    request({url, json: true}, (error, response) => {
        // console.log(url)
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(response.body.error){
            callback('Unable to find a location.', undefined)
        } else {
            const {weather_descriptions, temperature, feelslike} = response.body.current
            callback(undefined, weather_descriptions[0]+'. It is ' + temperature + ' degrees out. It feels like ' + feelslike + '.')
        }
    })
}

module.exports = forecast