pc.script.create("boid", function (context) {

    var extent = 10;

    var Boid = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
        
        // Start at random location
        var ltm = this.entity.getLocalTransform();
        ltm[12] = Math.random() * 20 - 10;
        ltm[13] = Math.random() * 20 - 10;
        ltm[14] = Math.random() * 20 - 10;
    };

    Boid.prototype.update = function (dt) {
        // Fly right to left
        var ltm = this.entity.getLocalTransform();
        ltm[12] += 0.1;
        if (ltm[12] > extent) {
            ltm[12] = -extent;
        }
        
        var device = pc.gfx.Device.getCurrent();
        device.updateGlobalState({
            fog: true, 
            fogDensity: 0.1,
            fogColor: [0, 0, 0]
        });
    };

    return Boid;
});