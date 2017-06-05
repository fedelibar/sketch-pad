

$(document).ready(function(){
	
	var $ns = $('#numbersquares').val();
	var sq;
	if($ns===''){
		sq = 16;
	}
	else sq = $ns;
	
	var $table = "<div class='board' style='grid-template-columns:repeat("+sq+", 1fr); grid-template-rows: repeat("+sq+", 1fr)'></div>";
	var $div = '';
	
	$('.table').append($table);
	for(var i=0; i<(sq*sq); i++){
		$div += "<div class='square'></div>"
	}
	$('.board').append($div);
	$('.square').hover(function(){
  	$(this).css('background-color', 'black');
  });
	$('#reset').click(function(){
		location.reload();
	});
	/*$('#change').click(function(){
		sq = $ns;
		location.reload();
	});*/
	console.log($('#numbersquares').val());
});
