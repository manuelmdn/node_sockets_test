var btn = document.querySelector('#sendbtn');
btn.addEventListener('click', function() {
    var mensage = document.querySelector('#txtmsg').value;
    enviarMensaje(mensage);
    //console.log(mensage);
})

var socket = io();

socket.on('connect', function() {
    console.log('server conected');
})

socket.on('disconnect', function() {
    console.log('server lost connection');
})

function enviarMensaje(msj) {
    socket.emit('sendMessage', msj, function(resp) {
        console.log(resp);
    });
}

socket.on('sendMessage', function(data) {
    console.log(data);
});