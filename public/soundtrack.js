pc.script.create("soundtrack", function (context) {

    var SoundTrack = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
        
        this.playing = false;
    };

    SoundTrack.prototype.update = function (dt) {
    	if (!!window._PAUSED) {
			if (this.playing) {
				context.systems.audiosource.pause(this.entity, 'FlyingToastersTheme.ogg');
				this.playing = false;
			}
    	}
    	else {
			if (!this.playing) {
					context.systems.audiosource.play(this.entity, 'FlyingToastersTheme.ogg');
					this.playing = true;
			}
    	}
    
    };

    return SoundTrack;
});