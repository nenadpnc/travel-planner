'use strict';
module.exports = function(io, feathers) {
    const socket = io();
    const app = feathers()
        .configure(feathers.socketio(socket, { timeout: 20000 }))
        .configure(feathers.hooks())
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
                location: 'Rome, Italy',
                checkin: '09/03/2016',
                checkout: '09/07/2016',
                guests: 2,
                budget: 300
            }
        }).then(function (data) {
            console.log(data);
        });
    }
};