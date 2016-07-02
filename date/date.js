$(function(){
	// 初始化
		var init = function(){
			initDate = new Date();
		}
		init();
		//构建周
		var weekDay = function(){
			var weekTxt = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
			var w = 0;
			var weekEm = '<ul>'
			for (; w < weekTxt.length; w++) {
				weekEm += '<li class="data-day-'+(parseInt(w) + 1)+'" data-day='+(parseInt(w) + 1)+'>'+weekTxt[w]+'</li>'
			}
			weekEm += '</ul>';
			$('.weekDate').html(weekEm);
		}

		//构建日期
		var initDraw = function(){
			var i = 0;
			var dateEm = '<ul>';
			for(;i<7;i++){
				dateEm += '<li class="data-week-'+(parseInt(i) + 1)+'"></li>';
			}
			dateEm += '</ul>';
			$('.motDate').html(dateEm);
		}
		
		//填充日期
		var drawDate = function(){
			var curDay = initDate.getDay();
			if(curDay == 0){
				curDay = 7;
			}
			initDate.setDate(initDate.getDate() - curDay + 1);
			
			var myDate = new Date(initDate),
				day = 0,
				dateNow = new Date;
			for(; day < 7; day++){
				var $thisDay = $('.data-week-'+(parseInt(day) + 1)),
					$thisWeek = $('.data-day-'+(parseInt(day) + 1)),
					y = myDate.getFullYear(),
					m = myDate.getMonth()+1,
					d = myDate.getDate();
				$thisDay.html(((m<10?'0'+m:m)+'月'+(d<10?'0'+d:d)+'日'));
				$thisDay.attr({
					'data-year': y,
					'data-month': m,
					'data-date': d
				});
				if(myDate.getFullYear()==dateNow.getFullYear()&&myDate.getMonth()==dateNow.getMonth()&&myDate.getDate()==dateNow.getDate()){
					$thisDay.html('今天').addClass('active');
					$thisWeek.addClass('active');
				}
				myDate.setDate(myDate.getDate() + 1);
			}
		}
		
		//加载日期
		var reload = function(){
			initDraw();
			weekDay();
			drawDate();
		}
		reload();
		
		//下一周
		$('.next-week').live('click',function(){
			initDate.setDate(initDate.getDate()+7);
			reload();
		})
		
		//上一周
		$('.prev-week').live('click',function(){
			// var now = new Date();
   //          if (initDate.getTime() > now.getTime()) {
   //          }
        	initDate.setDate(initDate.getDate() - 7);
            reload();
		})
})