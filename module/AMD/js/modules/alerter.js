// alerter.js文件
define(['dataService', 'jquery'], function(dataService, $) {
    let name = 'Tom'
    function showMsg() {
      alert(dataService.getMsg() + ', ' + name)
    }
    $('body').css('background', 'green')
    // 暴露模块
    return { showMsg }
  })