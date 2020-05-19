const screen_width = 1080; //设置屏幕的宽度，像素值
const screen_height = 1920; //设置屏幕的高度，像素值

sleep(2000);

threads.start(function () {
  //在子线程中调用observeKey()从而使按键事件处理在子线程执行
  events.observeKey();
  events.on("key_down", function (keyCode, events) {
    //音量键关闭脚本
    if (keyCode == keys.volume_down) {
      toast("您选择退出脚本！");
      sleep(2000);
      exit();
    }
  });
});

main();

function main() {
  prepareThings();

  // 什么值得买签到
  signSMZDM();

  // 京东签到钢镚京豆
  signJdBean();
}

//获取权限和设置参数
function prepareThings() {
  setScreenMetrics(screen_width, screen_height);
  // 申请屏幕截图权限
  if (!requestScreenCapture()) {
    toastLog("请求截图失败,脚本退出");
    exit();
  }
  sleep(2000);
}

function signSMZDM(params) {
  launchApp("什么值得买");

  id("v_line").waitFor();

  // 点击Tab：我的
  click(970, 1860);

  sleep(2000);

  // 点击签到
  clickByText("签到", 0);

  sleep(2000);

  // 退出app
  back();
  back();
  back();
}

function signJdBean(params) {
  launchApp("京东金融");
  sleep(1000);

  // 等待广告
  textContains("每日签到").waitFor();

  sleep(2000);
  
  // 点击每日签到
  clickByText("每日签到", 0);
  desc("ok.a878c12").waitFor();

  sleep(1000);
  
  // 点击领取钢镚
  clickByText("签到领钢镚", 0);

  sleep(2000);
  
  //去领京豆页面
  click(872, 1145);
  desc("我的").waitFor();

  // 签到领京豆
  clickByText("签到领京豆", 0);

  sleep(2000);
  
  // 返回
  id("common_webview_navbar_left").findOne().click();

  sleep(2000);

  // 退出app
  back();
  back();
}

function clickByText(text, paddingY) {
  var clicked = false;
  if (descEndsWith(text).exists()) {
    descEndsWith(text)
      .find()
      .forEach(function (pos) {
        var posb = pos.bounds();
        if (posb.centerX() < 0 || posb.centerY() - paddingY < 0) {
          return false;
        }
        //toastLog(pos.id());
        var str = pos.id();
        if (str != null) {
          if (str.search("search") == -1) {
            click(posb.centerX(), posb.centerY() - paddingY);
            //toastLog("get it 1");
            clicked = true;
          }
        } else {
          click(posb.centerX(), posb.centerY() - paddingY);
          //toastLog("get it 2");
          clicked = true;
        }
        sleep(100);
      });
  }
  if (textEndsWith(text).exists() && clicked == false) {
    textEndsWith(text)
      .find()
      .forEach(function (pos) {
        var posb = pos.bounds();
        if (posb.centerX() < 0 || posb.centerY() - paddingY < 0) {
          return false;
        }
        //toastLog(pos.id());
        var str = pos.id();
        if (str != null) {
          if (str.search("search") == -1) {
            click(posb.centerX(), posb.centerY() - paddingY);
            //toastLog("get it 3");
            clicked = true;
          }
        } else {
          click(posb.centerX(), posb.centerY() - paddingY);
          //toastLog("get it 4");
          clicked = true;
        }
        sleep(100);
      });
  }
  return clicked;
}
