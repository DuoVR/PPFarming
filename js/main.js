var songList = [];
var song = "";
var pp = 0.00;
var diff = "";
var star = "";

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/DuoVR/BigPP/master/js/songs.csv",
    dataType: "text",
    success: function(data) {
      readData(data);
    }
  });
});

function readData(allText) {
  var rows = allText.split(/\r\n|\n/);
  for (let i = 0; i < 100; i++) {
    rows[i] = rows[i].split('\t');
    song = rows[i][0];
		pp = rows[i][1];
		diff = rows[i][2];
		star = rows[i][3];
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
