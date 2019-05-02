var songList = [];
var song = "";
var pp = 0.00;
var diff = "";
var star = "";
var html = "";
var link = "";
var imgLink = "";
var img = "";
var id = "";

$(document).ready(function() {
	var tbody = $('tbody');
	tbody.html("");
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/DuoVR/PPFarming/master/js/songlist.tsv",
    dataType: "text",
    success: function(data) {
      readData(data);
    }
  });
});

function readData(allText) {
  var tbody = $('tbody');
  var rows = allText.split(/\r\n|\n/);
  for (let i = 0; i < 3000; i++) {
		html = "";

	    rows[i] = rows[i].split('\t');
	    song = $.trim(rows[i][0]);
		pp = parseFloat(rows[i][1]).toFixed(2);
		diff = rows[i][2];
		star = rows[i][3];
		starFloat = parseFloat(star.substring(0, star.length - 1)).toFixed(2);
		star = starFloat.toString() + "★";
		var songId = rows[i][5];
		downloadLink = "https://beatsaver.com/download/" + songId;
		detailsLink = "https://beatsaver.com/browse/detail/" + songId;
		songIdParts = songId.split("-");
		songIdBase = songIdParts[0];
		imgsrc = "https://beatsaver.com/storage/songs/" + songIdBase + "/" + songId + ".jpg";
		imgsrcPng = "https://beatsaver.com/storage/songs/" + songIdBase + "/" + songId + ".png";
		imgsrcPNG = "https://beatsaver.com/storage/songs/" + songIdBase + "/" + songId + ".PNG";

		html += '<tr class="row100 body">';
		html += '<td class="cell100 column1">';
		html += '<img class="cover" src="' + imgsrc + '" onError="this.onerror=null;this.src=' 
				+ "'https://github.com/DuoVR/PPFarming/blob/master/js/default.jpg?raw=true';"
				+ '">';
		html += '<a href="' + downloadLink + '" target="_blank">' + song + '</a></td>';
		html += '<td class="cell100 column2"><a class="btn btn-primary"'
				+ 'href="' + detailsLink + '" target="_blank">'
				+ '<i class="fa fa-info"></i>' + '</a></td>';
		html += '<td class="cell100 column3">' + pp + '</td>';
		html += '<td class="cell100 column4">' + diff + '</td>';
		html += '<td class="cell100 column5">' + star + '</td>';
		html += '</tr>';
		tbody.append(html);
  }
}

function resolveImg(img, png, pNG) {
	img.onerror = function() {
        img.src = png
        img.onerror = function() {
            img.src = pNG
        };
    };
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
