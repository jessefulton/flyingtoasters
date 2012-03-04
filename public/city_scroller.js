pc.script.create("city", function (context) {

    var CityScroller = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    CityScroller.prototype.initialize = function () {
        this.currentBlock = this.entity.findByName('Block1');
        this.nextBlock = this.entity.findByName('Block2');

        var ltm = this.currentBlock.getLocalTransform();
        this.block1StartX = ltm[12];
        ltm = this.nextBlock.getLocalTransform();
        this.block2StartX = ltm[12];
    };

    CityScroller.prototype.update = function (dt) {
        // Fly right to left
        var currentLtm = this.currentBlock.getLocalTransform();
        var nextLtm = this.nextBlock.getLocalTransform();
        currentLtm[12] -= 0.05;
        nextLtm[12] -= 0.05;
        if (nextLtm[12] < this.block1StartX) {
            currentLtm[12] = this.block2StartX;
            var oldCurrent = this.currentBlock;
            this.currentBlock = this.nextBlock;
            this.nextBlock = oldCurrent;
        }
    };
    
    return CityScroller;
});