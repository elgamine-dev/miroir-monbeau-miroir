let fetch = require('node-fetch')


const config = { 
    meteo : {
        key: '44daa4ee631b639ad3e7cd67a366e979',
        city : 'toulouse',
        units: 'metric'
    }
};

let data = {forecast:{}}


function buildUrl(config){
    return `http://api.openweathermap.org/data/2.5/weather?units=${config.units}&q=${config.city}&appid=${config.key}`;
}



function forecast(config){
    return new Promise((resolve, reject)=>{
        const url = buildUrl(config)

        fetch(url)
        .then(res=> {
            return res.json();
        }).then(data=> {
            resolve(data)
        })
    })
}


function update(){
    forecast(config.meteo).then(function(json) {
        console.log(json);
        data.forecast = json
    });
}

update();

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);


io.on('connection', function (socket) {
  socket.emit('forecast', data.forecast);
  socket.on('my other event', function (data) {
    console.log(data);
  });
});