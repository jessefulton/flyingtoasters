pc.script.create("scene_settings", function (context) {

    var SceneSettings = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;

        // Set a fog state
        this.enableFog(true);
    };

    SceneSettings.prototype.enableFog = function (enabled) {
        var device = pc.gfx.Device.getCurrent();
        device.updateGlobalState({
            cull: true,
            fog: enabled,
            fogDensity: 0.01,
            fogColor: [0, 0, 0]
        });
    };

    return SceneSettings;
});