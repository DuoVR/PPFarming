var songList = [];
var song = "";
var pp = 0.00;
var diff = "";
var star = "";
var html = "";

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/DuoVR/PPFarming/master/js/songs.tsv",
    dataType: "text",
    success: function(data) {
      readData(data);
    }
  });
});

function readData(allText) {
	var tbody = $('tbody');
  var rows = allText.split(/\r\n|\n/);
	html = "";
  for (let i = 0; i < 20; i++) {
    rows[i] = rows[i].split('\t');
    song = $.trim(rows[i][0]);
		pp = rows[i][1];
		diff = rows[i][2];
		star = rows[i][3];
		html += '<tr class="row100 body">';
		html += '<td class="cell100 column1">' + song + '</td>';
		html += '<td class="cell100 column2">' + pp + '</td>';
		html += '<td class="cell100 column3">' + diff + '</td>';
		html += '<td class="cell100 column4">' + star + '</td>';
		html += '</tr>';
		tbody.html(html);
		console.log(song);
		console.log(pp);
		console.log(diff);
		console.log(star);
  }
}

(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + "";

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + "";

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
})(jQuery);
