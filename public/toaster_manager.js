pc.script.create("toaster_manager", function (context) {

    var ToasterManager = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;

		console.log(window.dataBridge);

        window.dataBridge.registerMessageToasterManagerListener(function(data) {
        	console.log("Toaster Manager Received message: ");
        	console.log(data);
        });

        // Send message to server requesting state of world
        window.dataBridge.messageServer('connectedUsers', {}, function(response) {
				// Receieve response from server
				for (var user in response) {					
					var toasterName = user.id;
					var toasterLocation = user.location;
					//instantiate new toaster object
						//assign id
						//assign location & starting params (velocity, etc.?)
				}
			}
        );
        


    };

    ToasterManager.prototype.update = function (dt) {
    };

    return ToasterManager;
});