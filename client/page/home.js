Template.home.events({
	'click .control-up': function(ev) {
		Meteor.call('moveUp', 300);
	},
	'click .control-down': function(ev) {
		Meteor.call('moveDown', 300);
	},
	'click .control-left': function(ev) {
		Meteor.call('moveLeft', 300);
	},
	'click .control-right': function(ev) {
		Meteor.call('moveRight', 300);
	},
	'click .control-fire': function(ev) {
		Meteor.call('fire', 1);
	}
});