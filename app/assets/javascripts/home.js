$(function (){
	$('.nav-all').hover(function (){
		$(this).find('i').removeClass('down').addClass('up');
		$('.down-list').show();
	}, function (){
		$(this).find('i').removeClass('up').addClass('down');
		$('.down-list').hide();
	})


	// nav
	$('.nav-list li:gt(0)').click(function (){
		$(this).addClass('active').siblings().removeClass('active');
	})

	// lunbo
	var lb_idx = 1;
	var timer = null;

	timer = setInterval(play, 2000);

	function play () {
		if (lb_idx >=5) {
			lb_idx = 0;
		}

		setImg(lb_idx);

		setNum(lb_idx);

		lb_idx++;
	}

	function setImg(idx) {
		$('.lunbo-img li').eq(idx).show().siblings().hide();
	}

	function setNum(idx) {
		$('.lunbo-num li').eq(idx).addClass('active').siblings().removeClass('active');
	}

	$('.lunbo-img li').hover(function (){
		clearInterval(timer);
	}, function (){
		timer = setInterval(play, 2000);
	})

	$('.lunbo-num li').mouseover(function (){
		var idx = $(this).index();
		setImg(idx);
		setNum(idx);
		lb_idx = idx;
	})

	$('.shoucang li').mouseover(function (){
		$(this).addClass('active').siblings().removeClass('active');
		$('.shoucang-detail li').eq($(this).index()).show().siblings().hide();
	})

	$('.tuijian-icon-list li').mouseover(function (){
		$(this).addClass('active').siblings().removeClass('active');
		$('.tuijian-list li').eq($(this).index()).show().siblings().hide();
	})

	$('.month-day li.sp').mouseover(function (){
		$(this).addClass('active').siblings().removeClass('active');
		var idx = $('.month-day li.sp').index($(this));
		$('.rili-img li').eq(idx).show().siblings().hide();
	})
})



