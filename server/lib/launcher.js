launcher = Meteor.npmRequire('dream-cheeky-driver');

Meteor.methods({
	'moveUp': function(duration) {
		Async.runSync(function(done) {
			launcher.moveUp(duration, function(){
				done(null);
			});
		});
	},
	'moveDown': function(duration) {
		Async.runSync(function(done) {
			launcher.moveDown(duration, function(){
				done(null);
			});
		});
	},
	'moveLeft': function(duration) {
		Async.runSync(function(done) {
			launcher.moveLeft(duration, function(){
				done(null);
			});
		});
	},
	'moveRight': function(duration) {
		Async.runSync(function(done) {
			console.log(duration);
			launcher.moveRight(duration, function(){
				done(null);
			});
		});
	},
	'stop': function() {
		Async.runSync(function(done) {
			launcher.stop(function() {
				done(null);
			})
		});
	},
	'fire': function() {
		Async.runSync(function(done) {
			launcher.fire(1, function(){
				done(null);
			});
		})
	}
})