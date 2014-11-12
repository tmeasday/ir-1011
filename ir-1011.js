var ready = new ReactiveVar;

Router.route('/', {
  waitOn: function () {
    console.log('waitOn called');
    Meteor.setTimeout(function () {
      ready.set(true);
    }, 1000)
    return function() { return !! ready.get() };
  }
});