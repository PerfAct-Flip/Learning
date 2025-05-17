const express =  require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000 port'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))
app.post('/api', function(request, response){
    console.log('got request');
    console.log(request.body);
    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.latitude,
        longitude: data.longitude
    })
});