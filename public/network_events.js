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
        context.systems.audio.play('join.wav');
    };

    NetworkEvents.prototype.leave = function () {
        context.systems.audio.play('leave.wav');
    };




    NetworkEvents.prototype.update = function (dt) {
    };

    return NetworkEvents;
});