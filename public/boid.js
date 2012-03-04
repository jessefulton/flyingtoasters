pc.script.create("boid", function (context) {

    var yzExtent = 20;
    var xExtent = 75;

    var Boid = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;

        // Start at random location
        var ltm = this.entity.getLocalTransform();
        ltm[12] = (Math.random() * 2 - 1) * xExtent;
        ltm[13] = (Math.random() * 2 - 1) * yzExtent;
        ltm[14] = (Math.random() * 2 - 1) * yzExtent;
        
        if (context.systems.animation.hasComponent(entity)) {
            var speed = context.systems.animation.get(entity, 'speed');
            context.systems.animation.set(entity, 'speed', speed + Math.random() - 0.5);
        }
    };

    Boid.prototype.update = function (dt) {
        // Fly right to left
        var ltm = this.entity.getLocalTransform();
        ltm[12] += 0.1;
        if (ltm[12] > xExtent) {
            ltm[12] = -xExtent;
        }
    };

    Boid.prototype.setData = function () {
    
    };
    
    return Boid;
});