pc.script.create("boid", function (context) {

    var extent = 30;

    var Boid = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;

        // Start at random location
        var ltm = this.entity.getLocalTransform();
        ltm[12] = (Math.random() * 2 - 1) * extent;
        ltm[13] = (Math.random() * 2 - 1) * extent;
        ltm[14] = (Math.random() * 2 - 1) * extent;
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
            fogDensity: 0.01,
            fogColor: [0, 0, 0]
        });
    };

    Boid.prototype.setData = function () {
    
    };
    
    return Boid;
});