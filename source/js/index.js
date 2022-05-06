// 内容自动上升
function contentMove(){
    const contentDom = document.getElementById('content');
    contentDom.classList.add('content-move');
}

// header 滚动动画
window.onscroll = function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const headerTopDom = document.getElementById('header-top');
    if (scrollTop > 100) {
        headerTopDom.classList.remove("header-move2");
        headerTopDom.classList.add('header-move1');
        return
    }
    headerTopDom.classList.remove('header-move1');
    headerTopDom.classList.add("header-move2");
}



// 在浏览器加载完成前执行
function ready ( fn ) {

	if ( document.addEventListener ) { //标准浏览器
        
		document.addEventListener( 'DOMContentLoaded', function () {
			//注销时间，避免重复触发
			document.removeEventListener( 'DOMContentLoaded', arguments.callee, false );
			fn(); //运行函数
		}, false );

	} else if ( document.attachEvent ) { //IE浏览器

		document.attachEvent( 'onreadystatechange', function () {

			if ( document.readyState == 'complete' ) {
				document.detachEvent( 'onreadystatechange', arguments.callee );
				fn(); //函数运行
			}

		} );
	}
}

// 执行动画
ready(contentMove);
