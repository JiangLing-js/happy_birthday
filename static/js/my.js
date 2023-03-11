$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000, // 设置滚动时间为3秒
    loop:true, //循环滚动
    margin:10, //图片之间的间距
    nav:true, //显示前进和后退按钮

    responsive:{ //响应式
        0:{
            items:1 //在窄屏幕上，每次滚动一个图片
        },
        600:{
            items:1 //在屏幕宽度大于等于600像素时，每次滚动3个图片
        },
        1000:{
            items:1 //在屏幕宽度大于等于1000像素时，每次滚动5个图片
        }
    }
  });
});
