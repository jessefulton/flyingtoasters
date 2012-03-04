pc.script.create("toaster_manager", function (context) {

    var ToasterManager = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;

        // Send message to server requesting state of world
        messageServer('connectedUsers', function(response) {
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
        

        
        setToasterListener(function(data) {
        	var toasterName = data.id;
        	var operation = "translate";
        	var data = { dx: 0, dy: 0, dz: 0};
        	sendMessage(toasterName, operation, data);
        });
        
        
    };

    ToasterManager.prototype.update = function (dt) {
    };

    return Boid;
});