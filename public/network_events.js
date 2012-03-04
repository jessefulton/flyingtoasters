pc.script.create("network_events", function (context) {

    var NetworkEvents = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    NetworkEvents.prototype.initialize = function () {
		window.dataBridge.registerJoinListener(this.join);
		window.dataBridge.registerLeaveListener(this.leave);
    };

    NetworkEvents.prototype.join = function () {
    	console.log("join.wav");
    	console.log(this.entity);
        context.systems.audiosource.play(this.entity, 'join.wav');
    };

    NetworkEvents.prototype.leave = function () {
    	console.log("leave.wav");
        context.systems.audiosource.play(this.entity, 'leave.wav');
    };




    NetworkEvents.prototype.update = function (dt) {
    };

    return NetworkEvents;
});