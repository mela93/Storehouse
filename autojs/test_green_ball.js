//从排行榜获取可收集好友的点击位置
function getHasEnergyfriend(type) {
  // var img = getCaptureImg();
  // toastLog(img)
  //getCaptureImg();
  var img = images.read("/storage/emulated/0/Pictures/Screenshots/Screenshot_20200518-164023.jpg");
  var p = null;
  if (type == 1) {
    // 区分倒计时和可收取能量的小手
    // p = images.findMultiColors(
    //   img,
    //   "#ffffff",
    //   [
    //     [30, -21, "#1da06d"],
    //     [16, 16, "#ffffff"],
    //   ],
    //   {
    //     region: [1017, 350, 1, 1550],
    //   }
    // );
    p = images.findMultiColors(
      img,
      "#1da06e",
      [
        [44, 42, "#ffffff"],
        [52, 35, "#ffffff"],
      ],
      {
        region: [991, 350, 1, 1550],
      }
    );
  }
  toastLog(p);

  // 左（x,y）右（x,y）
  // (1013,399,1081,467)
  // (1013,779,1081,847)
  if (p != null) {
    toastLog("找到好友");
    return p;
  } else {
    toastLog("此页没有找到可收能量的好友");
    return null;
  }
}
getHasEnergyfriend(1);
