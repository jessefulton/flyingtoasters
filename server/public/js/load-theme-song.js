$(function() {
	var AudioletApp = function() {
		this.audiolet = new Audiolet();
		// Amen break is 138 BPM
		this.audiolet.scheduler.setTempo(138);

		// Create an empty buffer
		this.amen = new AudioletBuffer(1, 0);
		// Load wav using synchronous XHR
		this.amen.load('/audio/FlyingToastersTheme.wav', false);

		// Create buffer player
		this.player = new BufferPlayer(this.audiolet, this.amen, 1, 0, 1);
		this.player.connect(this.audiolet.output);
	}

	this.audioletApp = new AudioletApp();
});