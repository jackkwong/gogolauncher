launcher = Meteor.npmRequire('dream-cheeky-driver');

Meteor.methods({
	'moveUp': function(duration) {
		Async.runSync(function(done) {
			launcher.moveUp(duration, function(){
				console.log("HAHAHAHAHAHA")
				done(null);
			});
		});
	},
	'moveDown': function(duration) {
		Async.runSync(function(done) {
			launcher.moveDown(duration, function(){
				console.log("HAHAHAHAHAHA")
				done(null);
			});
		});
	},
	'moveLeft': function(duration) {
		Async.runSync(function(done) {
			launcher.moveLeft(duration, function(){
				console.log("HAHAHAHAHAHA")
				done(null);
			});
		});
	},
	'moveRight': function(duration) {
		Async.runSync(function(done) {
			console.log(duration);
			launcher.moveRight(duration, function(){
				console.log("HAHAHAHAHAHA")
				done(null);
			});
		});
	},
	'fire': function() {
		Async.runSync(function(done) {
			launcher.fire(1, function(){
				console.log("HAHAHAHAHAHA")
				done(null);
			});
		})
	}
})