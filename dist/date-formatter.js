$.fn.extend({
	dateFormat:function(format) {
		return this.each(function(i, v) {
			var date = $(v).text();

			var monthMap = ['january', 'february', 'march', 'april', 'may', 'june',
				'july', 'august', 'september', 'october', 'november', 'december'];

			var month = date.match(/[A-Z]+/, 'gi');
			month = month[0];

			var ddate = date.match(/[0-9]{1,2}/, 'g');
			ddate = ddate[0];

			var year = date.match(/[0-9]{4}/, 'g');
			year = year[0];

			switch(format) {
				case 'mm.dd.yy':
					formattedDate = month.toLowerCase();
					break;
			}

		});
	}
});
