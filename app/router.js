import Ember from "ember";
import config from "./config/environment";
import googlePageView from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageView, {
  location: config.locationType
});

Router.map(function() {
  this.resource("pla", function() {
    this.route("crosswalk");
  });
  this.route('programs', function() {
  	this.route('program', { path: '/:id' });
  });
  this.route('faq');
});

export default Router;