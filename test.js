var momentIterator = require('.');

var start = new Date(2015, 4, 12);
var end = new Date(2015, 10, 2);


momentIterator(start, end).each('months', function(d) {
	console.log('-->', d.format('LL'))
})


//	--> May 12, 2015
//	--> June 12, 2015
//	--> July 12, 2015
//	--> August 12, 2015
//	--> September 12, 2015
//	--> October 12, 2015



momentIterator(start, end).each('4 hours', function(d) {
	console.log('-->', d)
})


//	--> Tuesday, May 12, 2015 12:00 AM
//	--> Tuesday, May 12, 2015 4:00 AM
//	--> Tuesday, May 12, 2015 8:00 AM
//	...


momentIterator(start, end).each('3 months', console.log, {
	toObject: true
});


//	{ years: 2015, months: 4, date: 12, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
//	{ years: 2015, months: 7, date: 12, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }


momentIterator(start, end).each('3 months', console.log, {
	toObject: true,
	leading: false,
	trailing: true
});


//	{ years: 2015, months: 7, date: 12, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
//	{ years: 2015, months: 10, date: 12, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }


var x = momentIterator(start, end).range('months', {
	format:'LLL'
})

console.log(x)


//	[ 'May 12, 2015 12:00 AM',
//	  'June 12, 2015 12:00 AM',
//	  'July 12, 2015 12:00 AM',
//	  'August 12, 2015 12:00 AM',
//	  'September 12, 2015 12:00 AM',
//	  'October 12, 2015 12:00 AM' ]

