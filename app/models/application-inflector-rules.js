import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.uncountable('booking/activate');
inflector.uncountable('booking/multiple');
inflector.irregular('admin/booking', 'booking');
inflector.irregular('admin/booking/createBooking', 'booking');
inflector.uncountable('guest/activate');
inflector.irregular('admin/guest', 'guest');
inflector.irregular('admin/guest/createGuest', 'guest');
//inflector.irregular('admin/guest/active', 'guest');
inflector.uncountable('hotel/activate');
inflector.irregular('admin/hotel', 'hotel');
inflector.irregular('admin/hotel/createHotel', 'hotel');
//inflector.irregular('admin/hotel/active', 'hotel');

export default {};
