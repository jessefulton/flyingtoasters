pc.script.create("boid", function (context) {

    var Boid = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
        
        // Start at random location
        var extent = 10;
        var ltm = this.entity.getLocalTransform();
        ltm[12] = Math.random() * 20 - 10;
        ltm[13] = Math.random() * 20 - 10;
        ltm[14] = Math.random() * 20 - 10;
    };

    Boid.prototype.update = function (dt) {
        // Fly right to left
        var ltm = this.entity.getLocalTransform();
        ltm[12] += 0.1;
        if (ltm[12] > 10) {
            ltm[12] = -10;
        }
    };

    return Boid;
});