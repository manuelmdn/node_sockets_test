const { io } = require('../server');

io.on('connection', (client) => {
    console.log('user connected');

    client.emit('sendMessage', (data, callback) => {
        console.log(data);
        if (data) {
            callback({
                resp: 'RECEIVED'
            });
        }
    })
    client.on('disconnect', () => {
        console.log('user lost connection');
    })

    //Listen client
    client.on('sendMessage', (data, callback) => {

        client.broadcast.emit('sendMessage', data);
        // if (data) {
        //     callback({
        //         resp: 'Success'
        //     })
        // } else {
        //     callback({
        //         resp: 'Not response received'
        //     })
        // }
    })

})