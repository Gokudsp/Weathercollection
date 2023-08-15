let axios = require('axios')

exports.getweather =  async  (req,res) => {
    try{
let getweatherfromAPI =  await axios.get(`https://api.weatherbit.io/v2.0/current?lat=11.664325&lon=78.146011&key=96536ea88c7544b897f593c26a32b167`)
console.log(getweatherfromAPI);
res.send(JSON.parse(JSON.stringify(getweatherfromAPI.data)))
}

catch (error) {
    res.send(error)
}
}

  exports.getweatherByCoord =  async  (req,res) => {
    try{
      let getweatherfromAPI =  await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${req.body.lat}&lon=${req.body.lon}&key=96536ea88c7544b897f593c26a32b167`)
       console.log(getweatherfromAPI);
     res.send(JSON.parse(JSON.stringify(getweatherfromAPI.data)))
}

   catch (error) {
    res.send(error)
}
}

