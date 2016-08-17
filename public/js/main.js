'use strict';
module.exports = function(io, feathers) {
    const socket = io();
    // Initialize our Feathers client application through Socket.io
    // with hooks and authentication.
    const app = feathers()
        .configure(feathers.socketio(socket))
        .configure(feathers.hooks())
        // Use localStorage to store our login token
        .configure(feathers.authentication({
        storage: window.localStorage
        }));

    const searchService = app.service('search');

    document.addEventListener("DOMContentLoaded", function(event) { 
        document.querySelector('.search-btn').addEventListener('click', search);
    });

    function search() {
        searchService.find({
            query: {
                from: document.getElementById('from').value,
                to: document.getElementById('to').value
            }
        }).then(function (data) {
        console.log(data);
        });
    }
};