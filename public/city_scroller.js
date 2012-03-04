pc.script.create("city", function (context) {

    var extent = 30;

    var CityScroller = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
        
        var ltm = this.entity.getLocalTransform();
        this.startx = ltm[12];
    };

    CityScroller.prototype.update = function (dt) {
        // Fly right to left
        var ltm = this.entity.getLocalTransform();
        ltm[12] -= 0.05;
        if (ltm[12] < (this.startx - extent)) {
            ltm[12] = this.startx;
        }
    };
    
    return CityScroller;
});