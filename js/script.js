$(function(){

	$('.tab__item:first').show();
	$('.tabs .btn-tab:first').addClass('active');

	$('.btn-tab').on('click', function(event){
		$('.btn-tab').removeClass('active');
		$(this).addClass('active');
		$('.tab__item').hide();

		var idTab = $(this).attr('href');
		$(idTab).show();
	});

	$('.inp').hover(function(e){
		var $sibl = $(this).siblings('.tooltipe');
		$sibl.css('opacity', '1');
	},
	function(){
		var $sibl = $(this).siblings('.tooltipe');
		$sibl.css('opacity', '0');
	});

	$('.btn-show').on('click', function(){
		$('.tooltipe').css('opacity', '1');
	})
})