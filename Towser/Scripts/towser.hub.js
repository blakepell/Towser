﻿var towserHubInit = function () {
    var term = towserTermInit();

    var hub = $.connection.towserHub;

    hub.client.write = function (data) {
        term.write(data);
    }

    hub.client.error = function (data) { console.error(data); }
    hub.client.dcs = function (data) { console.error("DCS " + data); }
    hub.client.osc = function (data) { console.info("OSC " + data); }
    hub.client.pm = function (data) { console.info("PM " + data); }
    hub.client.apc = function (data) { console.info("APC " + data); }

    $.connection.hub.start()
        .done(function () {
            console.log('Now connected, connection ID=' + $.connection.hub.id);

            // receive from terminal
            term.on("data", function (data) {
                hub.server.keyPress(data);
            });
        })

        .fail(function () {
            console.log('Could not Connect!');
        });

    term.onreset = function () { $.connection.hub.stop(); }
}