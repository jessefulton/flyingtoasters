pc.script.create("toaster_manager", function (context) {

    var ToasterManager = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;

        function onMessageReceived() {
            // Receieve response from server
            for (var i = 0; i < response.numUsers; i++) {
                var toasterName = 'Toster' + i;
                sendMessage(toasterName, setFlag, response.country);
            }
        }

        // Send message to server requesting state of world
        sendMsgToServer('newViewer', onMessageReceived);
    };

    ToasterManager.prototype.update = function (dt) {
    };

    return Boid;
});