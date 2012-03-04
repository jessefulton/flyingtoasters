pc.script.create("fly", function (context) {

    var yzExtent = 20;
    var xExtent = 75;

    var Fly = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    Fly.prototype.initialize = function () {
        var entity = this.entity;

        // Start at random location
        var ltm = entity.getLocalTransform();
        ltm[12] = (Math.random() * 2 - 1) * xExtent;
        ltm[13] = (Math.random() * 2 - 1) * yzExtent;
        ltm[14] = (Math.random() * 2 - 1) * yzExtent;

        if (context.systems.animation.hasComponent(entity)) {
            var speed = context.systems.animation.get(entity, 'speed');
            context.systems.animation.set(entity, 'speed', speed + Math.random() - 0.5);
        }
    };

    Fly.prototype.update = function (dt) {
        // Fly right to left
        var ltm = this.entity.getLocalTransform();
        ltm[12] += 0.1;
        if (ltm[12] > xExtent) {
            this.initialize();
            ltm[12] = -xExtent;
        }
    };

    return Fly;
});