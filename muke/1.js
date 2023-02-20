var chart = document.getElementsByClassName("chart"); //整个轮播图
var bgImg = document.getElementById("bg-img"); //body里面插入的唯一一张照片
var left = document.getElementsByClassName("left"); //左箭头
var right = document.getElementsByClassName("right"); //右箭头
var img = document.getElementsByClassName("img01"); //下面四张照片的集合
var t; //变量t 后面被赋予定时器
//start方法  轮播图片开始
function start() {
  t = setInterval(function () {
    if (bgImg.src.match("1.jpg")) {
      bgImg.src = "2.jpg";
    } else if (bgImg.src.match("2.jpg")) {
      bgImg.src = "3.jpg";
    } else if (bgImg.src.match("3.jpg")) {
      bgImg.src = "4.jpg";
    } else {
      bgImg.src = "1.jpg";
    }
  }, 1000);
}
//stop方法 其实就是清除定时器t
function stop() {
  clearInterval(t);
}
//鼠标移入时 图片不轮播 两边箭头出现
chart[0].onmouseover = function () {
  stop();
  left[0].style.display = "block";
  right[0].style.display = "block";
};
//鼠标移出时 图标轮播 两边箭头隐藏
chart[0].onmouseout = function () {
  start();
  left[0].style.display = "none";
  right[0].style.display = "none";
};
//给左箭头添加点击事件
left[0].onclick = function () {
  if (bgImg.src.match("1.jpg")) {
    bgImg.src = "5.jpg";
  } else if (bgImg.src.match("5.jpg")) {
    bgImg.src = "4.jpg";
  } else if (bgImg.src.match("3.jpg")) {
    bgImg.src = "2.jpg";
  } else {
    bgImg.src = "1.jpg";
  }
};
//给右箭头添加点击事件
right[0].onclick = function () {
  if (bgImg.src.match("1.jpg")) {
    bgImg.src = "2.jpg";
  } else if (bgImg.src.match("2.jpg")) {
    bgImg.src = "3.jpg";
  } else if (bgImg.src.match("4.jpg")) {
    bgImg.src = "5.jpg";
  } else {
    bgImg.src = "1.jpg";
  }
};
//给下面的四张小图片分别添加点击事件
//使点击小图片时 大图片也会相应的改变
img[0].onclick = function () {
  bgImg.src = "1.jpg";
};
img[1].onclick = function () {
  bgImg.src = "2.jpg";
};
img[2].onclick = function () {
  bgImg.src = "3.jpg";
};
img[3].onclick = function () {
  bgImg.src = "4.jpg";
};
img[4].onclick = function () {
  bgImg.src = "5.jpg";
};
setInterval(changeImg, 3000);
img[5].onclick = function () {
  bgImg.src = "6.jpg";
};
img[6].onclick = function () {
  bgImg.src = "7.jpg";
};
import "swiper/css/swiper.css";
