/**
 * @param id 回到顶部按钮的容器的Id,为空的话，生成的容器id='undefined'
 * setTitle 方法设置容器的title
 * setCssText 方法设置容器的css样式
 * 使用方法：在页面<head>标签内加入<script type="text/javascript" src="http://t1.chsi.com.cn/common/js/goToTop.js"></script>，然后在</body>标签前加入<script type="text/javascript">var s = new CreatGoToTop("jsGoToTop");s.goToTop();</script>
 * IE6下会有按钮随滚动抖动的情况，可以在<head>标签内添加*html{background-image:url(about:blank);background-attachment:fixed;}
 * author lugp
 * 2013.07.18
 */
function CreatGoToTop(sId){
	this.id = sId;
	this.title = "回顶部";
	this.cssText = "width:50px;height:50px;position:fixed;bottom:10px;right:25px;z-index:100;background:url(http://t4.chsi.com.cn/common/images/gtt.png) no-repeat;cursor:pointer;display:none;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));_margin-bottom:10px;";
}
CreatGoToTop.prototype = {
	goToTop : function(){
		var topDiv=document.createElement("div");
		var showGoToTopBtn = function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop > 0){
				topDiv.style.display = "block";
			}
			if(scrollTop == 0){
				topDiv.style.display = "none";
			}
		};
		var domThis = this;
		topDiv.id = this.id;
		topDiv.className = this.className;
		topDiv.title = this.title;
		topDiv.style.cssText = this.cssText;
		document.body.appendChild(topDiv);
		showGoToTopBtn();
		window.onscroll = showGoToTopBtn;
		topDiv.onclick = function(){
			window.scrollTo(0,0);
		};
		topDiv.onmouseover = function(){
			this.style.backgroundPosition = "-50px 0";
		};
		topDiv.onmouseout = function(){
			this.style.backgroundPosition = "0 0";
		}
	},
	setTitle : function(txt){
		this.title = txt;
	},
	setCssText : function(css){
		this.cssText = css;
	}
}