Router.route '/', ->
  this.layout 'layout'
  this.render 'home'