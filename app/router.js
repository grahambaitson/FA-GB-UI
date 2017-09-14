import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('admin', function() {
    this.route('guest', function() {
      this.route('create-guest');
    });
    this.route('hotel', function() {
      this.route('create-hotel');
    });
    this.route('booking', function() {
      this.route('create-booking');
    });
  });

  // This is so the parent route data does not display in the sub-route
  this.route('admin/booking/create-booking', { path: '/admin/booking/create-booking' });
  this.route('admin/guest/create-guest', { path: '/admin/guest/create-guest' });
  this.route('admin/hotel/create-hotel', { path: '/admin/hotel/create-hotel' });

  this.route('login');
  this.route('catch-all', { path: '/*wildcard' });
});

export default Router;
