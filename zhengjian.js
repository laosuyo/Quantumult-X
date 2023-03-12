/******************************

温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
脚本功能：证件照相馆-美颜证件照——解锁VIP
下载地址：https://dwurl.cn/5CBmO3 ，短链被拦截就自行苹果商店搜索
软件版本：1.2.1
更新时间：2023-3-10
微信公众号：夕阳技术线报
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/standard\.rhinoxlab\.com\/standard\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/zhengjian.js

[mitm] 

hostname = standard.rhinoxlab.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "success" : true,
  "result" : {
    "mobile" : "15988888888",
    "registerTime" : "2023-03-09 21:03:59",
    "vipExpireDays" : 7,
    "nickname" : "U2303784141",
    "dataId" : "10167836703880764475",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ],
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "type" : "VIP",
    "inviteCode" : "dVWdrPKt",
    "vipExpireTime" : "2028-03-17 10:59:59"
  },
  "returnCode" : "200",
  "timeOut" : false
}



$done({body : JSON.stringify(objc)});