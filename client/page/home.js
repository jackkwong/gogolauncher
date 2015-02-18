function isIOS(){
	return /iP(hone|ad)/.test(window.navigator.userAgent);
}

window.onload = function() {
  if(isIOS()) {
    document.body.addEventListener('touchstart', function() {}, false);
  }
};

if (Modernizr.touch) {
	Template.home.events({
		'touchstart .control-up': function(ev) {
			Meteor.call('moveUp', 0);
		},
		'touchstart .control-down': function(ev) {
			Meteor.call('moveDown', 0);
		},
		'touchstart .control-left': function(ev) {
			Meteor.call('moveLeft', 0);
		},
		'touchstart .control-right': function(ev) {
			Meteor.call('moveRight', 0);
		},
		'touchend .control-up, touchend .control-down, touchend .control-left, touchend .control-right': function(ev) {
			Meteor.call('stop');
		},
		'touchend .control-fire': function(ev) {
			Meteor.call('fire', 1);
		}
	});
} else {
	Template.home.events({
		'mousedown .control-up': function(ev) {
			Meteor.call('moveUp', 0);
		},
		'mousedown .control-down': function(ev) {
			Meteor.call('moveDown', 0);
		},
		'mousedown .control-left': function(ev) {
			Meteor.call('moveLeft', 0);
		},
		'mousedown .control-right': function(ev) {
			Meteor.call('moveRight', 0);
		},
		'mouseup .control-up, mouseup .control-down, mouseup .control-left, mouseup .control-right': function(ev) {
			Meteor.call('stop');
		},
		'mouseup .control-fire': function(ev) {
			Meteor.call('fire', 1);
		}
	});
}